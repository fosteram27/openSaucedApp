import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";
import { NodeMouseEventHandler } from "@nivo/treemap";
import { useRouter } from "next/router";
import { useRef } from "react";
import Error from "components/atoms/Error/Error";
import { fetchApiData, validateListPath } from "helpers/fetchApiData";
import ListPageLayout from "layouts/lists";
import MostActiveContributorsCard from "components/molecules/MostActiveContributorsCard/most-active-contributors-card";
import useMostActiveContributors from "lib/hooks/api/useMostActiveContributors";
import { ContributionsTreemap } from "components/molecules/ContributionsTreemap/contributions-treemap";
import { useContributorsByProject } from "lib/hooks/api/useContributorsByProject";
import { useContributionsByProject } from "lib/hooks/api/useContributionsByProject";
import { getGraphColorPalette } from "lib/utils/color-utils";
import ContributionsEvolutionByType from "components/molecules/ContributionsEvolutionByTypeCard/contributions-evolution-by-type-card";
import useContributionsEvolutionByType from "lib/hooks/api/useContributionsByEvolutionType";
import { FeatureFlagged } from "components/shared/feature-flagged";
import { FeatureFlag, getAllFeatureFlags } from "lib/utils/server/feature-flags";
import { OnToggleResizeEventType } from "components/Graphs/shared/graph-resizer";

interface ContributorListPageProps {
  list?: DBList;
  numberOfContributors: number;
  isError: boolean;
  isOwner: boolean;
  featureFlags: Record<FeatureFlag, boolean>;
}

export type FilterParams = {
  listId: string;
  range?: string;
  limit?: string;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createPagesServerClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const bearerToken = session ? session.access_token : "";
  const { listId, range: rawRange, limit: rawLimit } = ctx.params as FilterParams;

  const range = rawRange ? Number(rawRange) : 30;
  const limit = rawLimit ? Number(rawLimit) : 20;
  const [{ data, error: contributorListError }, { data: list, error }] = await Promise.all([
    fetchApiData<PagedData<DBListContributor>>({
      path: `lists/${listId}/contributors?limit=1`,
      bearerToken,
      pathValidator: validateListPath,
    }),
    fetchApiData<DBList>({ path: `lists/${listId}`, bearerToken, pathValidator: validateListPath }),
  ]);

  if (error?.status === 404 || error?.status === 401) {
    return {
      notFound: true,
    };
  }

  const userId = Number(session?.user.user_metadata.sub);
  const featureFlags = await getAllFeatureFlags(userId);

  return {
    props: {
      list,
      numberOfContributors: data?.meta.itemCount,
      isError: error || contributorListError,
      isOwner: list && list.user_id === userId,
      featureFlags,
    },
  };
};

const ListActivityPage = ({ list, numberOfContributors, isError, isOwner, featureFlags }: ContributorListPageProps) => {
  const router = useRouter();
  const range = router.query.range as string;
  const {
    data: contributorStats,
    isLoading,
    isError: isMostActiveError,
    setContributorType,
    contributorType,
  } = useMostActiveContributors({ listId: list!.id });

  const {
    setRepoId,
    error,
    data: projectContributionsByUser,
    repoId,
    isLoading: isLoadingProjectContributionsByUser,
  } = useContributorsByProject(list!.id, Number(range ?? "30"));

  const {
    data: projectData,
    error: projectDataError,
    isLoading: isTreemapLoading,
  } = useContributionsByProject({
    listId: list!.id,
    range: Number(range ?? "30"),
  });

  const onHandleClick: NodeMouseEventHandler<object> = (node) => {
    // @ts-ignore TODO: fix this
    setRepoId(Number(node.data.repoId));
  };
  const treemapData = {
    id: "root",
    children:
      repoId === null
        ? (projectData ?? []).map(({ org_id, project_id, repo_id, contributions }) => {
            return {
              id: `${org_id}/${project_id}`,
              value: contributions,
              repoId: `${repo_id}`,
            };
          })
        : projectContributionsByUser?.map(({ login, commits, prs_created, prs_reviewed, issues_created, comments }) => {
            return {
              id: login,
              value: commits + prs_created, // Coming soon + prs_reviewed + issues_created + comments,
            };
          }),
  };

  const {
    data: evolutionData,
    isError: evolutionError,
    isLoading: isLoadingEvolution,
  } = useContributionsEvolutionByType({ listId: list!.id, range: Number(range ?? "30") });
  const treemapRef = useRef<HTMLSpanElement>(null);
  const mostActiveRef = useRef<HTMLSpanElement>(null);
  const graphResizerLookup = new Map();

  if (treemapRef.current) {
    graphResizerLookup.set(treemapRef.current, true);
  }

  if (mostActiveRef.current) {
    graphResizerLookup.set(mostActiveRef.current, true);
  }

  const onToggleResize: OnToggleResizeEventType = (event) => {
    let graphNode = event.currentTarget as HTMLElement;
    const graphElements = [...graphResizerLookup.keys()];

    for (const node of graphElements) {
      node.style.gridColumn = "";
      node.style.gridRow = "";
    }

    // find the parent element = to treeMap by recursively going up the DOM to find treeMap element
    while (graphNode?.parentElement) {
      graphNode = graphNode.parentElement;

      if (graphElements.includes(graphNode)) {
        break;
      }
    }

    for (const node of graphElements) {
      if (node === graphNode) {
        continue;
      }

      graphResizerLookup.set(node, true);
    }

    const resizeTreemap = graphResizerLookup.get(graphNode);
    graphNode.style.gridColumn = resizeTreemap ? "1 / span 2" : "";
    graphNode.style.gridRow = resizeTreemap ? "1 / span 2" : "";
    graphResizerLookup.set(graphNode, !resizeTreemap);
  };

  return (
    <ListPageLayout list={list} numberOfContributors={numberOfContributors} isOwner={isOwner}>
      {isError ? (
        <Error errorMessage="Unable to load list activity" />
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <span ref={mostActiveRef} className="relative">
            <MostActiveContributorsCard
              data={contributorStats?.data ?? []}
              totalContributions={contributorStats?.meta.allContributionsCount ?? 0}
              topContributor={contributorStats?.data?.length ? contributorStats.data[0] : undefined}
              setContributorType={setContributorType}
              contributorType={contributorType}
              isLoading={isLoading}
              onToggleResize={onToggleResize}
            />
          </span>
          <span ref={treemapRef} className="relative">
            <ContributionsTreemap
              setRepoId={setRepoId}
              repoId={repoId}
              onClick={onHandleClick}
              data={treemapData}
              color={getGraphColorPalette()}
              isLoading={isLoadingProjectContributionsByUser || isTreemapLoading}
              onToggleResize={onToggleResize}
            />
          </span>
          <FeatureFlagged flag="contributions_evolution_by_type" featureFlags={featureFlags}>
            <ContributionsEvolutionByType data={evolutionData} isLoading={isLoadingEvolution} />
          </FeatureFlagged>
        </div>
      )}
    </ListPageLayout>
  );
};

export default ListActivityPage;

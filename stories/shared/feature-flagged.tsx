import posthog from "posthog-js";
import { useEffect, useState } from "react";

export interface UserProperties {
  id?: string;
}

interface FeatureFlaggedProps {
  flag: FeatureFlag;
  userProperties?: UserProperties;
  children: React.ReactElement;
}

type FeatureFlag = "contributions_evolution_by_type";

export function isFlagEnabled(flag: FeatureFlag) {
  console.dir(posthog.featureFlags);

  return posthog.isFeatureEnabled(flag);
}

export const FeatureFlagged = ({ flag, children }: FeatureFlaggedProps) => {
  const [isFeatureFlagEnabled, setIsFeatureFlagEnabled] = useState<boolean | undefined>(false);

  // Ensure flags are loaded before usage.
  // You'll only need to call this on the code for when the first time a user visits.
  useEffect(() => {
    // posthog.onFeatureFlags(function () {
    //   setIsFeatureFlagEnabled(isFlagEnabled(flag));
    // });

    setIsFeatureFlagEnabled(isFlagEnabled(flag));
  }, [flag]);

  // return children if feature is enabled otherwise return null
  return isFeatureFlagEnabled ? children : null;
};

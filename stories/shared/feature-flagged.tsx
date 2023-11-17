interface FeatureFlaggedProps {
  flag: string;
  children: React.ReactNode;
}

export function isFeatureFlagEnabled(flag: string) {
  return false;
}

export const FeatureFlagged = ({ flag, children }: FeatureFlaggedProps) => {
  if (isFeatureFlagEnabled(flag)) {
    return children;
  }

  return null;
};

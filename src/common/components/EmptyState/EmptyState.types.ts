import type { ReactNode } from 'react';

export interface EmptyStateProps {
  title: string;
  message?: string;
  icon?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

import type { ReactNode } from 'react';
import type { ComponentSize } from '@/common/components/shared.types';

export interface EmptyStateProps {
  title: string;
  message?: string;
  icon?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  size?: ComponentSize;
}

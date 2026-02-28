import type { ColorScheme } from '@/common/components/shared.types';
import { vs } from '@/theme/metrics';

export type ProgressBarSize = 'sm' | 'md' | 'lg';

export interface ProgressBarProps {
  value?: number;
  size?: ProgressBarSize;
  colorScheme?: ColorScheme;
  indeterminate?: boolean;
  accessibilityLabel?: string;
}

export const PROGRESS_BAR_HEIGHTS: Record<ProgressBarSize, number> = {
  sm: vs(4),
  md: vs(8),
  lg: vs(12),
};

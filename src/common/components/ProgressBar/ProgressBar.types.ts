import type { ColorScheme } from '@/common/components/shared.types';

export type ProgressBarSize = 'sm' | 'md' | 'lg';

export interface ProgressBarProps {
  value?: number;
  size?: ProgressBarSize;
  colorScheme?: ColorScheme;
  indeterminate?: boolean;
  accessibilityLabel?: string;
}

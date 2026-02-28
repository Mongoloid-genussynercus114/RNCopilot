import type { ColorScheme } from '@/common/components/shared.types';

export type BadgeVariant = 'solid' | 'outline' | 'dot';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  colorScheme?: ColorScheme;
  count?: number;
  maxCount?: number;
  children?: React.ReactNode;
}

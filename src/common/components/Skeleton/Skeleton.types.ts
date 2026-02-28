import type { DimensionValue } from 'react-native';

export type SkeletonVariant = 'text' | 'circle' | 'rect';

export interface SkeletonProps {
  variant?: SkeletonVariant;
  width?: DimensionValue;
  height?: DimensionValue;
  animated?: boolean;
}

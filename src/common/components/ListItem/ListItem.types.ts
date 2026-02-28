import type { ReactNode } from 'react';
import type { ComponentSize } from '@/common/components/shared.types';

export interface ListItemProps {
  title: string;
  subtitle?: string;
  left?: ReactNode;
  right?: ReactNode;
  onPress?: () => void;
  divider?: boolean;
  disabled?: boolean;
  size?: ComponentSize;
}

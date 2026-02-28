import type { ReactNode } from 'react';

export interface ListItemProps {
  title: string;
  subtitle?: string;
  left?: ReactNode;
  right?: ReactNode;
  onPress?: () => void;
  divider?: boolean;
  disabled?: boolean;
}

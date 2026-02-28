import type { ReactNode } from 'react';
import type { IconProps } from '@/common/components/Icon';

export interface MenuItem {
  label: string;
  onPress: () => void;
  icon?: IconProps['name'];
  disabled?: boolean;
  destructive?: boolean;
}

export interface MenuProps {
  visible: boolean;
  onDismiss: () => void;
  anchor: ReactNode;
  items: MenuItem[];
}

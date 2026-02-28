import type Ionicons from '@expo/vector-icons/Ionicons';
import type { ComponentProps } from 'react';

export type IconVariant = 'primary' | 'secondary' | 'tertiary' | 'muted' | 'inverse' | 'accent';

export interface IconProps {
  name: ComponentProps<typeof Ionicons>['name'];
  variant?: IconVariant;
  size?: number;
  color?: string;
  accessibilityLabel?: string;
}

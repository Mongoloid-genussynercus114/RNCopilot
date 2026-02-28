import type { IconProps } from '@/common/components/Icon';

export type IconButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps {
  icon: IconProps['name'];
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  accessibilityLabel: string;
}

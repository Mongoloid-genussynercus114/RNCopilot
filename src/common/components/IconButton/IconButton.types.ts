import type { IconProps } from '@/common/components/Icon';
import { hs } from '@/theme/metrics';

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

export const ICON_BUTTON_SIZES: Record<IconButtonSize, { container: number; icon: number }> = {
  sm: { container: hs(32), icon: hs(16) },
  md: { container: hs(40), icon: hs(20) },
  lg: { container: hs(48), icon: hs(24) },
};

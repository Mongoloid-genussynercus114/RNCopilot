import type { ImageSource } from 'expo-image';
import { hs } from '@/theme/metrics';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  source?: ImageSource;
  initials?: string;
  icon?: React.ReactNode;
  size?: AvatarSize;
  accessibilityLabel?: string;
}

export const AVATAR_SIZES: Record<AvatarSize, number> = {
  xs: hs(24),
  sm: hs(32),
  md: hs(40),
  lg: hs(56),
  xl: hs(80),
};

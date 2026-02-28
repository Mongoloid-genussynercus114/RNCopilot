import Ionicons from '@expo/vector-icons/Ionicons';
import { useUnistyles } from 'react-native-unistyles';
import type { IconProps } from './Icon.types';

export function Icon({
  name,
  variant = 'primary',
  size = 24,
  color,
  accessibilityLabel,
}: IconProps) {
  const { theme } = useUnistyles();

  const variantColorMap = {
    primary: theme.colors.icon.primary,
    secondary: theme.colors.icon.secondary,
    tertiary: theme.colors.icon.tertiary,
    muted: theme.colors.icon.muted,
    inverse: theme.colors.icon.inverse,
    accent: theme.colors.icon.accent,
  };

  const resolvedColor = color ?? variantColorMap[variant];

  return (
    <Ionicons
      name={name}
      size={size}
      color={resolvedColor}
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel}
    />
  );
}

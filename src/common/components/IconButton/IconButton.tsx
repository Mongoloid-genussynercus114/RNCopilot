import { ActivityIndicator, Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import { useUnistyles } from 'react-native-unistyles';
import { Icon } from '@/common/components/Icon';
import { useAnimatedPress } from '@/hooks/useAnimatedPress';
import { ICON_SIZES, styles } from './IconButton.styles';
import type { IconButtonProps } from './IconButton.types';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function IconButton({
  icon,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  loading = false,
  onPress,
  accessibilityLabel,
}: IconButtonProps) {
  const { theme } = useUnistyles();
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress();

  styles.useVariants({ variant, size, disabled: disabled || loading });

  const iconColorMap = {
    primary: theme.colors.text.inverse,
    secondary: theme.colors.text.primary,
    outline: theme.colors.brand.primary,
    ghost: theme.colors.icon.primary,
  };

  const iconSize = ICON_SIZES[size] ?? ICON_SIZES.md;

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled || loading}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled: disabled || loading, busy: loading }}
      style={[styles.container, animatedStyle]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={iconColorMap[variant]} />
      ) : (
        <Icon name={icon} size={iconSize} color={iconColorMap[variant]} />
      )}
    </AnimatedPressable>
  );
}

import { ActivityIndicator, Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import { useUnistyles } from 'react-native-unistyles';
import { Text } from '@/common/components/Text';
import { useAnimatedPress } from '@/hooks/useAnimatedPress';
import { styles } from './Button.styles';
import type { ButtonProps } from './Button.types';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function Button({
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  style,
  ...rest
}: ButtonProps) {
  const { theme } = useUnistyles();
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress();

  styles.useVariants({
    variant,
    size,
    fullWidth,
    disabled: disabled || loading,
  });

  const spinnerColorMap = {
    primary: theme.colors.text.inverse,
    secondary: theme.colors.text.primary,
    outline: theme.colors.brand.primary,
    ghost: theme.colors.brand.primary,
  };

  return (
    <AnimatedPressable
      style={[styles.container, animatedStyle, style as object]}
      disabled={disabled || loading}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityState={{ disabled: disabled || loading, busy: loading }}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={spinnerColorMap[variant]} />
      ) : (
        <>
          {leftIcon}
          <Text style={styles.label}>{title}</Text>
          {rightIcon}
        </>
      )}
    </AnimatedPressable>
  );
}

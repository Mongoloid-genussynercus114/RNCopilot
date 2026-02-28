import { Pressable, ActivityIndicator } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { Text } from '@/common/components/Text';
import { styles } from './Button.styles';
import type { ButtonProps } from './Button.types';

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

  const textColorMap = {
    primary: theme.colors.text.inverse,
    secondary: theme.colors.text.primary,
    outline: theme.colors.brand.primary,
    ghost: theme.colors.brand.primary,
  };

  return (
    <Pressable
      style={[
        styles.container,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        style as object,
      ]}
      disabled={disabled || loading}
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityState={{ disabled: disabled || loading, busy: loading }}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={textColorMap[variant]} />
      ) : (
        <>
          {leftIcon}
          <Text style={[styles[`${variant}Text`], styles[`${size}Text`]]}>{title}</Text>
          {rightIcon}
        </>
      )}
    </Pressable>
  );
}

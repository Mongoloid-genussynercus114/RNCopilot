import { Pressable, ActivityIndicator } from 'react-native';
import { useUnistyles, StyleSheet } from 'react-native-unistyles';
import { Icon } from '@/common/components/Icon';
import { ICON_BUTTON_SIZES } from './IconButton.types';
import type { IconButtonProps } from './IconButton.types';

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
  const sizeConfig = ICON_BUTTON_SIZES[size];

  const iconColorMap = {
    primary: theme.colors.text.inverse,
    secondary: theme.colors.text.primary,
    outline: theme.colors.brand.primary,
    ghost: theme.colors.icon.primary,
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled: disabled || loading, busy: loading }}
      style={[
        styles.container,
        styles[variant],
        {
          width: sizeConfig.container,
          height: sizeConfig.container,
          borderRadius: sizeConfig.container / 2,
        },
        disabled && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={iconColorMap[variant]} />
      ) : (
        <Icon name={icon} size={sizeConfig.icon} color={iconColorMap[variant]} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: theme.colors.brand.primary,
  },
  secondary: {
    backgroundColor: theme.colors.background.surfaceAlt,
  },
  outline: {
    borderWidth: 1,
    borderColor: theme.colors.border.default,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.5,
  },
}));

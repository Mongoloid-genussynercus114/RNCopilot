import { Pressable, View } from 'react-native';
import { useUnistyles, StyleSheet } from 'react-native-unistyles';
import { Icon } from '@/common/components/Icon';
import { Text } from '@/common/components/Text';
import type { ChipProps } from './Chip.types';

export function Chip({
  label,
  variant = 'outline',
  size = 'md',
  selected = false,
  onPress,
  onClose,
  icon,
  disabled = false,
}: ChipProps) {
  const { theme } = useUnistyles();

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || !onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected, disabled }}
      style={[
        styles.container,
        size === 'sm' ? styles.sm : styles.md,
        variant === 'solid' ? styles.solid : styles.outline,
        selected && styles.selected,
        disabled && styles.disabled,
      ]}
    >
      {icon && <View style={styles.iconWrapper}>{icon}</View>}
      <Text
        variant={size === 'sm' ? 'caption' : 'bodySmall'}
        weight="medium"
        style={[
          styles.label,
          variant === 'solid' && styles.solidLabel,
          selected && styles.selectedLabel,
        ]}
      >
        {label}
      </Text>
      {onClose && (
        <Pressable
          onPress={onClose}
          hitSlop={4}
          accessibilityRole="button"
          accessibilityLabel={`Remove ${label}`}
        >
          <Icon
            name="close-circle"
            size={size === 'sm' ? theme.metrics.iconSize.xs : theme.metrics.iconSize.sm}
            variant="muted"
          />
        </Pressable>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: theme.metrics.borderRadius.full,
    alignSelf: 'flex-start',
  },
  sm: {
    paddingHorizontal: theme.metrics.spacing.p8,
    paddingVertical: theme.metrics.spacingV.p4,
    gap: theme.metrics.spacing.p4,
  },
  md: {
    paddingHorizontal: theme.metrics.spacing.p12,
    paddingVertical: theme.metrics.spacingV.p8,
    gap: theme.metrics.spacing.p4,
  },
  solid: {
    backgroundColor: theme.colors.background.surfaceAlt,
  },
  outline: {
    borderWidth: 1,
    borderColor: theme.colors.border.default,
  },
  selected: {
    backgroundColor: theme.colors.brand.primary,
    borderColor: theme.colors.brand.primary,
  },
  disabled: {
    opacity: 0.5,
  },
  iconWrapper: {
    marginRight: theme.metrics.spacing.p4,
  },
  label: {
    color: theme.colors.text.primary,
  },
  solidLabel: {
    color: theme.colors.text.primary,
  },
  selectedLabel: {
    color: theme.colors.text.inverse,
  },
}));

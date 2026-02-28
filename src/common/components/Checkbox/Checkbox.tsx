import { Pressable, View } from 'react-native';
import { useUnistyles, StyleSheet } from 'react-native-unistyles';
import { Icon } from '@/common/components/Icon';
import { Text } from '@/common/components/Text';
import { hs } from '@/theme/metrics';
import type { CheckboxProps } from './Checkbox.types';

export function Checkbox({ checked, onChange, disabled = false, label }: CheckboxProps) {
  const { theme } = useUnistyles();

  return (
    <Pressable
      onPress={() => onChange(!checked)}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityLabel={label}
      accessibilityState={{ checked, disabled }}
      style={[styles.container, disabled && styles.disabled]}
    >
      <View style={[styles.box, checked && styles.boxChecked]}>
        {checked && <Icon name="checkmark" size={theme.metrics.iconSize.xs} color="#FFFFFF" />}
      </View>
      {label && (
        <Text variant="body" style={styles.label}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.metrics.spacing.p8,
    paddingVertical: theme.metrics.spacingV.p4,
  },
  disabled: {
    opacity: 0.5,
  },
  box: {
    width: hs(22),
    height: hs(22),
    borderRadius: theme.metrics.borderRadius.sm,
    borderWidth: 2,
    borderColor: theme.colors.border.default,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxChecked: {
    backgroundColor: theme.colors.brand.primary,
    borderColor: theme.colors.brand.primary,
  },
  label: {
    flex: 1,
  },
}));

import { Switch as RNSwitch, View } from 'react-native';
import { useUnistyles, StyleSheet } from 'react-native-unistyles';
import { Text } from '@/common/components/Text';
import type { SwitchProps } from './Switch.types';

export function Switch({ value, onValueChange, disabled = false, label }: SwitchProps) {
  const { theme } = useUnistyles();

  return (
    <View style={[styles.container, disabled && styles.disabled]}>
      {label && (
        <Text variant="body" style={styles.label}>
          {label}
        </Text>
      )}
      <RNSwitch
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        trackColor={{
          false: theme.colors.background.surfaceAlt,
          true: theme.colors.brand.primary,
        }}
        thumbColor={theme.colors.text.inverse}
        accessibilityRole="switch"
        accessibilityLabel={label}
        accessibilityState={{ checked: value, disabled }}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.metrics.spacingV.p8,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    flex: 1,
    marginRight: theme.metrics.spacing.p12,
  },
}));

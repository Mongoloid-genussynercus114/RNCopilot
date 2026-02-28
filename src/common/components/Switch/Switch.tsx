import { Switch as RNSwitch, View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { Text } from '@/common/components/Text';
import { styles } from './Switch.styles';
import type { SwitchProps } from './Switch.types';

export function Switch({
  value,
  onValueChange,
  disabled = false,
  size = 'md',
  label,
}: SwitchProps) {
  const { theme } = useUnistyles();

  styles.useVariants({ size, disabled });

  return (
    <View style={styles.container}>
      {label && (
        <Text variant="body" style={styles.label}>
          {label}
        </Text>
      )}
      <View style={styles.switchWrapper}>
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
    </View>
  );
}

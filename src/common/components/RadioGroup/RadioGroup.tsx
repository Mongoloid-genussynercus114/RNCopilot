import { Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from '@/common/components/Text';
import { hs } from '@/theme/metrics';
import type { RadioGroupProps } from './RadioGroup.types';

export function RadioGroup({
  value,
  onChange,
  options,
  orientation = 'vertical',
}: RadioGroupProps) {
  return (
    <View
      style={[styles.container, orientation === 'horizontal' && styles.horizontal]}
      accessibilityRole="radiogroup"
    >
      {options.map((option) => {
        const isSelected = option.value === value;
        return (
          <Pressable
            key={option.value}
            onPress={() => onChange(option.value)}
            disabled={option.disabled}
            accessibilityRole="radio"
            accessibilityLabel={option.label}
            accessibilityState={{ checked: isSelected, disabled: option.disabled }}
            style={[styles.option, option.disabled && styles.disabled]}
          >
            <View style={[styles.radio, isSelected && styles.radioSelected]}>
              {isSelected && <View style={styles.radioDot} />}
            </View>
            <Text variant="body">{option.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    gap: theme.metrics.spacingV.p8,
  },
  horizontal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.metrics.spacing.p16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.metrics.spacing.p8,
    paddingVertical: theme.metrics.spacingV.p4,
  },
  disabled: {
    opacity: 0.5,
  },
  radio: {
    width: hs(22),
    height: hs(22),
    borderRadius: hs(11),
    borderWidth: 2,
    borderColor: theme.colors.border.default,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: theme.colors.brand.primary,
  },
  radioDot: {
    width: hs(10),
    height: hs(10),
    borderRadius: hs(5),
    backgroundColor: theme.colors.brand.primary,
  },
}));

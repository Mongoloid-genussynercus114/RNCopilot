import { Pressable, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Text } from '@/common/components/Text';
import { styles } from './SegmentedControl.styles';
import type { SegmentedControlProps } from './SegmentedControl.types';

export function SegmentedControl({
  value,
  onChange,
  options,
  size = 'md',
  disabled = false,
}: SegmentedControlProps) {
  const selectedIndex = options.findIndex((o) => o.value === value);
  const indicatorPosition = useSharedValue(selectedIndex >= 0 ? selectedIndex : 0);

  styles.useVariants({ size, disabled });

  const handleSelect = (optionValue: string, index: number) => {
    if (disabled) return;
    indicatorPosition.value = withTiming(index, { duration: 200 });
    onChange(optionValue);
  };

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: `${indicatorPosition.value * 100}%` as unknown as number }],
    width: `${100 / options.length}%`,
  }));

  return (
    <View style={styles.container} accessibilityRole="tablist">
      <Animated.View style={[styles.indicator, indicatorStyle]} />
      {options.map((option, index) => {
        const isSelected = option.value === value;
        return (
          <Pressable
            key={option.value}
            onPress={() => handleSelect(option.value, index)}
            disabled={disabled}
            accessibilityRole="tab"
            accessibilityState={{ selected: isSelected }}
            style={styles.segment}
          >
            {option.icon && <View style={styles.segmentIcon}>{option.icon}</View>}
            <Text
              variant={size === 'sm' ? 'caption' : 'bodySmall'}
              weight={isSelected ? 'semibold' : 'regular'}
              style={isSelected ? styles.selectedText : styles.unselectedText}
            >
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

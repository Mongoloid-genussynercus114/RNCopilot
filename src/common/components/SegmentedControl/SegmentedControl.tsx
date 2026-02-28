import { Pressable, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from '@/common/components/Text';
import { hs } from '@/theme/metrics';
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
    <View
      style={[
        styles.container,
        size === 'sm' ? styles.containerSm : styles.containerMd,
        disabled && styles.disabled,
      ]}
      accessibilityRole="tablist"
    >
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

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.background.surfaceAlt,
    borderRadius: theme.metrics.borderRadius.md,
    position: 'relative',
    overflow: 'hidden',
  },
  containerSm: {
    padding: hs(2),
  },
  containerMd: {
    padding: hs(3),
  },
  disabled: {
    opacity: 0.5,
  },
  indicator: {
    position: 'absolute',
    top: hs(3),
    bottom: hs(3),
    left: hs(3),
    backgroundColor: theme.colors.background.surface,
    borderRadius: theme.metrics.borderRadius.md,
    elevation: 1,
    shadowColor: theme.colors.shadow.color,
    shadowOffset: { width: 0, height: hs(1) },
    shadowOpacity: 0.1,
    shadowRadius: hs(2),
  },
  segment: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.metrics.spacingV.p8,
    paddingHorizontal: theme.metrics.spacing.p12,
    gap: theme.metrics.spacing.p4,
    zIndex: 1,
  },
  segmentIcon: {
    marginRight: theme.metrics.spacing.p4,
  },
  selectedText: {
    color: theme.colors.text.primary,
  },
  unselectedText: {
    color: theme.colors.text.secondary,
  },
}));

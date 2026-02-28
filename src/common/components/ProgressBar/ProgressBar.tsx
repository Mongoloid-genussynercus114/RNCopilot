import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
} from 'react-native-reanimated';
import { useUnistyles, StyleSheet } from 'react-native-unistyles';
import { PROGRESS_BAR_HEIGHTS } from './ProgressBar.types';
import type { ProgressBarProps } from './ProgressBar.types';

const COLOR_MAP = {
  primary: { group: 'brand', key: 'primary' },
  success: { group: 'state', key: 'success' },
  error: { group: 'state', key: 'error' },
  warning: { group: 'state', key: 'warning' },
  info: { group: 'state', key: 'info' },
} as const;

export function ProgressBar({
  value = 0,
  size = 'md',
  colorScheme = 'primary',
  indeterminate = false,
  accessibilityLabel,
}: ProgressBarProps) {
  const { theme } = useUnistyles();
  const barHeight = PROGRESS_BAR_HEIGHTS[size];
  const translateX = useSharedValue(-1);

  const colorConfig = COLOR_MAP[colorScheme];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const colorGroup = theme.colors[colorConfig.group] as Record<string, any>;
  const barColor = colorGroup[colorConfig.key] as string;

  useEffect(() => {
    if (indeterminate) {
      translateX.value = withRepeat(
        withSequence(withTiming(0, { duration: 600 }), withTiming(1, { duration: 600 })),
        -1,
        false
      );
    }
  }, [indeterminate, translateX]);

  const indeterminateStyle = useAnimatedStyle(() => ({
    width: '30%',
    left: `${translateX.value * 70}%`,
  }));

  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <View
      style={[styles.track, { height: barHeight, borderRadius: barHeight / 2 }]}
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel ?? 'Progress'}
      accessibilityValue={{ min: 0, max: 100, now: indeterminate ? undefined : clampedValue }}
    >
      {indeterminate ? (
        <Animated.View
          style={[
            styles.fill,
            { backgroundColor: barColor, borderRadius: barHeight / 2 },
            indeterminateStyle,
          ]}
        />
      ) : (
        <View
          style={[
            styles.fill,
            {
              backgroundColor: barColor,
              borderRadius: barHeight / 2,
              width: `${clampedValue}%`,
            },
          ]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  track: {
    width: '100%',
    backgroundColor: theme.colors.background.surfaceAlt,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));

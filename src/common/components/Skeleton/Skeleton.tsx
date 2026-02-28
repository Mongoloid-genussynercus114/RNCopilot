import { useEffect } from 'react';
import type { DimensionValue } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { hs, vs } from '@/theme/metrics';
import type { SkeletonProps, SkeletonVariant } from './Skeleton.types';

const DEFAULT_WIDTHS: Record<SkeletonVariant, DimensionValue> = {
  text: '100%',
  circle: hs(40),
  rect: '100%',
};

const DEFAULT_HEIGHTS: Record<SkeletonVariant, number> = {
  text: vs(14),
  circle: hs(40),
  rect: vs(40),
};

const BORDER_RADII: Record<SkeletonVariant, number> = {
  text: hs(4),
  circle: 999,
  rect: hs(8),
};

export function Skeleton({ variant = 'rect', width, height, animated = true }: SkeletonProps) {
  const opacity = useSharedValue(1);

  useEffect(() => {
    if (animated) {
      opacity.value = withRepeat(withTiming(0.4, { duration: 800 }), -1, true);
    }
  }, [animated, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const resolvedWidth = width ?? DEFAULT_WIDTHS[variant];
  const resolvedHeight = height ?? DEFAULT_HEIGHTS[variant];
  const borderRadius = BORDER_RADII[variant];

  return (
    <Animated.View
      style={[
        styles.base,
        { width: resolvedWidth, height: resolvedHeight, borderRadius },
        animated && animatedStyle,
      ]}
    />
  );
}

const styles = StyleSheet.create((theme) => ({
  base: {
    backgroundColor: theme.colors.background.surfaceAlt,
  },
}));

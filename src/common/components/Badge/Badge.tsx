import { View } from 'react-native';
import { useUnistyles, StyleSheet } from 'react-native-unistyles';
import { Text } from '@/common/components/Text';
import { hs } from '@/theme/metrics';
import type { BadgeProps } from './Badge.types';

const COLOR_MAP = {
  primary: { bg: 'brand', key: 'primary' },
  success: { bg: 'state', key: 'success' },
  error: { bg: 'state', key: 'error' },
  warning: { bg: 'state', key: 'warning' },
  info: { bg: 'state', key: 'info' },
} as const;

function getDisplayCount(count: number | undefined, maxCount: number): string | undefined {
  if (count === undefined) return undefined;
  if (count > maxCount) return `${maxCount}+`;
  return `${count}`;
}

export function Badge({
  variant = 'solid',
  size = 'md',
  colorScheme = 'primary',
  count,
  maxCount = 99,
  children,
}: BadgeProps) {
  const { theme } = useUnistyles();

  const colorConfig = COLOR_MAP[colorScheme];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const colorGroup = theme.colors[colorConfig.bg] as Record<string, any>;
  const resolvedColor = colorGroup[colorConfig.key] as string;

  if (variant === 'dot') {
    return (
      <View style={styles.dotWrapper}>
        {children}
        <View style={[styles.dot, { backgroundColor: resolvedColor }]} />
      </View>
    );
  }

  const displayCount = getDisplayCount(count, maxCount);
  const isSolid = variant === 'solid';

  return (
    <View
      style={[
        styles.badge,
        size === 'sm' ? styles.sm : styles.md,
        isSolid ? styles.solid : styles.outline,
        { borderColor: resolvedColor, backgroundColor: isSolid ? resolvedColor : undefined },
      ]}
    >
      {displayCount !== undefined && (
        <Text
          variant="caption"
          weight="semibold"
          color={isSolid ? theme.colors.text.inverse : resolvedColor}
        >
          {displayCount}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.metrics.borderRadius.full,
  },
  solid: {
    borderWidth: 0,
  },
  outline: {
    borderWidth: 1,
  },
  sm: {
    minWidth: hs(18),
    height: hs(18),
    paddingHorizontal: theme.metrics.spacing.p4,
  },
  md: {
    minWidth: hs(22),
    height: hs(22),
    paddingHorizontal: theme.metrics.spacing.p4,
  },
  dotWrapper: {
    position: 'relative',
  },
  dot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: hs(8),
    height: hs(8),
    borderRadius: theme.metrics.borderRadius.xs,
  },
}));

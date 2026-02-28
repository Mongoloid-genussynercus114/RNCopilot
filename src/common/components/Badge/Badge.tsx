import { View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { Text } from '@/common/components/Text';
import { styles } from './Badge.styles';
import type { BadgeProps } from './Badge.types';

const COLOR_MAP = {
  primary: { group: 'brand', key: 'primary' },
  success: { group: 'state', key: 'success' },
  error: { group: 'state', key: 'error' },
  warning: { group: 'state', key: 'warning' },
  info: { group: 'state', key: 'info' },
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

  styles.useVariants({ variant: variant === 'dot' ? undefined : variant, size, colorScheme });

  if (variant === 'dot') {
    return (
      <View style={styles.dotWrapper}>
        {children}
        <View style={styles.dot} />
      </View>
    );
  }

  const displayCount = getDisplayCount(count, maxCount);
  const isSolid = variant === 'solid';

  const colorConfig = COLOR_MAP[colorScheme];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const colorGroup = theme.colors[colorConfig.group] as Record<string, any>;
  const resolvedColor = colorGroup[colorConfig.key] as string;

  return (
    <View style={styles.badge}>
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

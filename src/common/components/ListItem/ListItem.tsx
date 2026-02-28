import { Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Divider } from '@/common/components/Divider';
import { Text } from '@/common/components/Text';
import type { ListItemProps } from './ListItem.types';

export function ListItem({
  title,
  subtitle,
  left,
  right,
  onPress,
  divider = false,
  disabled = false,
}: ListItemProps) {
  const Wrapper = onPress ? Pressable : View;
  const wrapperProps = onPress
    ? {
        onPress,
        disabled,
        accessibilityRole: 'button' as const,
        accessibilityState: { disabled },
      }
    : {};

  return (
    <>
      <Wrapper style={[styles.container, disabled && styles.disabled]} {...wrapperProps}>
        {left && <View style={styles.left}>{left}</View>}
        <View style={styles.content}>
          <Text variant="body">{title}</Text>
          {subtitle && (
            <Text variant="bodySmall" style={styles.subtitle}>
              {subtitle}
            </Text>
          )}
        </View>
        {right && <View style={styles.right}>{right}</View>}
      </Wrapper>
      {divider && <Divider />}
    </>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.metrics.spacingV.p12,
    paddingHorizontal: theme.metrics.spacing.p16,
    gap: theme.metrics.spacing.p12,
  },
  disabled: {
    opacity: 0.5,
  },
  left: {
    flexShrink: 0,
  },
  content: {
    flex: 1,
    gap: theme.metrics.spacingV.p4,
  },
  subtitle: {
    color: theme.colors.text.secondary,
  },
  right: {
    flexShrink: 0,
  },
}));

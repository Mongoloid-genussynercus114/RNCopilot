import { useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useUnistyles, StyleSheet } from 'react-native-unistyles';
import { Text } from '@/common/components/Text';
import { hs } from '@/theme/metrics';
import type { SnackbarProps } from './Snackbar.types';

export function Snackbar({
  visible,
  message,
  action,
  duration = 4000,
  onDismiss,
  variant = 'default',
}: SnackbarProps) {
  const { theme } = useUnistyles();
  const insets = useSafeAreaInsets();
  const translateY = useSharedValue(100);

  const bgColorMap = {
    default: theme.colors.background.elevated,
    success: theme.colors.state.success,
    error: theme.colors.state.error,
  };

  const textColor = variant === 'default' ? theme.colors.text.primary : theme.colors.text.inverse;

  useEffect(() => {
    if (visible) {
      translateY.value = withTiming(0, { duration: 250 });
      const timer = setTimeout(() => {
        translateY.value = withTiming(100, { duration: 250 }, (finished) => {
          if (finished) runOnJS(onDismiss)();
        });
      }, duration);
      return () => clearTimeout(timer);
    }
    translateY.value = withTiming(100, { duration: 250 });
    return undefined;
  }, [visible, duration, onDismiss, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: bgColorMap[variant], paddingBottom: insets.bottom + hs(8) },
        animatedStyle,
      ]}
    >
      <Text variant="bodySmall" weight="medium" color={textColor} style={styles.messageText}>
        {message}
      </Text>
      {action && (
        <Pressable onPress={action.onPress} accessibilityRole="button">
          <Text variant="bodySmall" weight="bold" style={styles.actionText}>
            {action.label}
          </Text>
        </Pressable>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.metrics.spacing.p16,
    paddingTop: theme.metrics.spacingV.p12,
    gap: theme.metrics.spacing.p12,
    elevation: theme.colors.shadow.elevationLarge,
    shadowColor: theme.colors.shadow.color,
    shadowOffset: { width: 0, height: hs(-2) },
    shadowOpacity: 0.1,
    shadowRadius: hs(8),
  },
  messageText: {
    flex: 1,
  },
  actionText: {
    color: theme.colors.brand.secondary,
  },
}));

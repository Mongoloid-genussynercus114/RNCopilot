import { View, ActivityIndicator } from 'react-native';
import { useUnistyles, StyleSheet } from 'react-native-unistyles';
import { Text } from '@/common/components/Text';
import type { LoadingProps } from './Loading.types';

export function Loading({
  message,
  fullScreen = false,
  size = 'large',
  accessibilityLabel,
}: LoadingProps) {
  const { theme } = useUnistyles();

  return (
    <View
      style={fullScreen ? styles.fullScreen : styles.inline}
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel ?? message ?? 'Loading'}
    >
      <ActivityIndicator size={size} color={theme.colors.brand.primary} />
      {message && (
        <Text variant="bodySmall" style={styles.message}>
          {message}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  inline: {
    padding: theme.metrics.spacing.p16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background.app,
  },
  message: {
    marginTop: theme.metrics.spacingV.p12,
    color: theme.colors.text.secondary,
  },
}));

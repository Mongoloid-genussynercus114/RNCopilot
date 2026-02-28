import { View, ActivityIndicator } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { Text } from '@/common/components/Text';
import { styles } from './Loading.styles';
import type { LoadingProps } from './Loading.types';

export function Loading({
  message,
  fullScreen = false,
  size = 'large',
  accessibilityLabel,
}: LoadingProps) {
  const { theme } = useUnistyles();

  styles.useVariants({ fullScreen });

  return (
    <View
      style={styles.container}
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

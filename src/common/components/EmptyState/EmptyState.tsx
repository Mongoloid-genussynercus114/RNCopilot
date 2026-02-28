import { View } from 'react-native';
import { Button } from '@/common/components/Button';
import { Text } from '@/common/components/Text';
import { styles } from './EmptyState.styles';
import type { EmptyStateProps } from './EmptyState.types';

export function EmptyState({
  title,
  message,
  icon,
  actionLabel,
  onAction,
  size = 'md',
}: EmptyStateProps) {
  styles.useVariants({ size });

  return (
    <View style={styles.container} accessibilityRole="alert">
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text variant="h3" align="center">
        {title}
      </Text>
      {message && (
        <Text variant="bodySmall" align="center" style={styles.message}>
          {message}
        </Text>
      )}
      {actionLabel && onAction && (
        <Button title={actionLabel} variant="outline" size="sm" onPress={onAction} />
      )}
    </View>
  );
}

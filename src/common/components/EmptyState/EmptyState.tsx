import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Button } from '@/common/components/Button';
import { Text } from '@/common/components/Text';
import type { EmptyStateProps } from './EmptyState.types';

export function EmptyState({ title, message, icon, actionLabel, onAction }: EmptyStateProps) {
  return (
    <View style={styles.container} accessibilityRole="alert">
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text variant="h3" align="center">
        {title}
      </Text>
      {message && (
        <Text variant="bodySmall" align="center" color={undefined} style={styles.message}>
          {message}
        </Text>
      )}
      {actionLabel && onAction && (
        <Button title={actionLabel} variant="outline" size="sm" onPress={onAction} />
      )}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.metrics.spacing.p32,
    gap: theme.metrics.spacingV.p12,
  },
  iconContainer: {
    marginBottom: theme.metrics.spacingV.p4,
  },
  message: {
    color: theme.colors.text.secondary,
  },
}));

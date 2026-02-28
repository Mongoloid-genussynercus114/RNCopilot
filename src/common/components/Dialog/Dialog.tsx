import { Modal, Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Button } from '@/common/components/Button';
import { Text } from '@/common/components/Text';
import { hs } from '@/theme/metrics';
import type { DialogProps } from './Dialog.types';

export function Dialog({
  visible,
  onDismiss,
  title,
  message,
  actions = [],
  children,
}: DialogProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onDismiss}
      statusBarTranslucent
    >
      <Pressable style={styles.backdrop} onPress={onDismiss}>
        <Pressable style={styles.card} onPress={() => {}}>
          {title && (
            <Text variant="h3" style={styles.title}>
              {title}
            </Text>
          )}
          {message && (
            <Text variant="body" style={styles.message}>
              {message}
            </Text>
          )}
          {children}
          {actions.length > 0 && (
            <View style={styles.actions}>
              {actions.map((action) => (
                <Button
                  key={action.label}
                  title={action.label}
                  variant={action.variant ?? 'ghost'}
                  size="sm"
                  onPress={action.onPress}
                />
              ))}
            </View>
          )}
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create((theme) => ({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.overlay.modal,
    padding: theme.metrics.spacing.p32,
  },
  card: {
    width: '100%',
    maxWidth: hs(400),
    backgroundColor: theme.colors.background.surface,
    borderRadius: theme.metrics.borderRadius.xl,
    padding: theme.metrics.spacing.p24,
    gap: theme.metrics.spacingV.p12,
  },
  title: {
    color: theme.colors.text.primary,
  },
  message: {
    color: theme.colors.text.secondary,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: theme.metrics.spacing.p8,
    marginTop: theme.metrics.spacingV.p8,
  },
}));

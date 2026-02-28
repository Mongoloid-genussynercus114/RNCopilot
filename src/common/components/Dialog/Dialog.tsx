import { Modal, Pressable, View } from 'react-native';
import { Button } from '@/common/components/Button';
import { Text } from '@/common/components/Text';
import { styles } from './Dialog.styles';
import type { DialogProps } from './Dialog.types';

export function Dialog({
  visible,
  onDismiss,
  title,
  message,
  actions = [],
  children,
  size = 'md',
}: DialogProps) {
  styles.useVariants({ size });

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

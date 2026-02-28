import { Modal, Pressable, View } from 'react-native';
import { useUnistyles, StyleSheet } from 'react-native-unistyles';
import { Icon } from '@/common/components/Icon';
import { Text } from '@/common/components/Text';
import { hs } from '@/theme/metrics';
import type { MenuProps } from './Menu.types';

export function Menu({ visible, onDismiss, anchor, items }: MenuProps) {
  const { theme } = useUnistyles();

  return (
    <View>
      {anchor}
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onDismiss}
        statusBarTranslucent
      >
        <Pressable style={styles.backdrop} onPress={onDismiss}>
          <View style={styles.menu}>
            {items.map((item) => (
              <Pressable
                key={item.label}
                onPress={() => {
                  item.onPress();
                  onDismiss();
                }}
                disabled={item.disabled}
                accessibilityRole="menuitem"
                accessibilityState={{ disabled: item.disabled }}
                style={[styles.item, item.disabled && styles.itemDisabled]}
              >
                {item.icon && (
                  <Icon
                    name={item.icon}
                    size={theme.metrics.iconSize.md}
                    variant={item.destructive ? 'primary' : 'secondary'}
                    color={item.destructive ? undefined : undefined}
                  />
                )}
                <Text
                  variant="body"
                  style={[styles.itemText, item.destructive && styles.destructiveText]}
                >
                  {item.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.overlay.modal,
  },
  menu: {
    backgroundColor: theme.colors.background.surface,
    borderRadius: theme.metrics.borderRadius.lg,
    paddingVertical: theme.metrics.spacingV.p4,
    minWidth: hs(180),
    maxWidth: hs(280),
    elevation: theme.colors.shadow.elevationLarge,
    shadowColor: theme.colors.shadow.color,
    shadowOffset: { width: 0, height: hs(4) },
    shadowOpacity: 0.15,
    shadowRadius: hs(12),
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.metrics.spacingV.p12,
    paddingHorizontal: theme.metrics.spacing.p16,
    gap: theme.metrics.spacing.p12,
  },
  itemDisabled: {
    opacity: 0.5,
  },
  itemText: {
    color: theme.colors.text.primary,
  },
  destructiveText: {
    color: theme.colors.state.error,
  },
}));

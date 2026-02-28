import { Modal, Pressable, View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { Icon } from '@/common/components/Icon';
import { Text } from '@/common/components/Text';
import { styles } from './Menu.styles';
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
                    color={item.destructive ? theme.colors.state.error : undefined}
                    variant={item.destructive ? undefined : 'secondary'}
                  />
                )}
                <Text
                  variant="body"
                  style={item.destructive ? styles.destructiveText : styles.itemText}
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

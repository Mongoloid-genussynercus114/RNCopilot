import { Pressable, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Divider } from '@/common/components/Divider';
import { Text } from '@/common/components/Text';
import { useAnimatedPress } from '@/hooks/useAnimatedPress';
import { styles } from './ListItem.styles';
import type { ListItemProps } from './ListItem.types';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function ListItem({
  title,
  subtitle,
  left,
  right,
  onPress,
  divider = false,
  disabled = false,
  size = 'md',
}: ListItemProps) {
  styles.useVariants({ size, disabled });

  return (
    <>
      {onPress ? (
        <PressableListItem
          title={title}
          subtitle={subtitle}
          left={left}
          right={right}
          onPress={onPress}
          disabled={disabled}
        />
      ) : (
        <View style={styles.container}>
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
        </View>
      )}
      {divider && <Divider />}
    </>
  );
}

function PressableListItem({
  title,
  subtitle,
  left,
  right,
  onPress,
  disabled,
}: {
  title: string;
  subtitle?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  onPress: () => void;
  disabled: boolean;
}) {
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedPress({ scale: 0.99 });

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      style={[styles.container, animatedStyle]}
    >
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
    </AnimatedPressable>
  );
}

import { View, Pressable } from 'react-native';
import { styles } from './Card.styles';
import type { CardProps } from './Card.types';

export function Card({
  variant = 'default',
  pressable = false,
  onPress,
  children,
  style,
  ...rest
}: CardProps) {
  const cardStyle = [styles.card, variant !== 'default' && styles[variant], style];

  if (pressable && onPress) {
    return (
      <Pressable onPress={onPress} style={cardStyle} accessibilityRole="button" {...rest}>
        {children}
      </Pressable>
    );
  }

  return (
    <View style={cardStyle} {...rest}>
      {children}
    </View>
  );
}

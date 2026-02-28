import { Text as RNText } from 'react-native';
import { styles } from './Text.styles';
import type { TextProps } from './Text.types';

export function Text({
  variant = 'body',
  weight,
  color,
  align,
  style,
  children,
  ...rest
}: TextProps) {
  styles.useVariants({ variant, weight, align });

  return (
    <RNText style={[styles.text, color ? { color } : undefined, style]} {...rest}>
      {children}
    </RNText>
  );
}

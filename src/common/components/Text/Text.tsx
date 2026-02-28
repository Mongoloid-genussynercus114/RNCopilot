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
  return (
    <RNText
      style={[
        styles.base,
        styles[variant],
        weight && styles[weight],
        align && styles[align],
        color ? { color } : undefined,
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
}

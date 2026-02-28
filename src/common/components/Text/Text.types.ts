import type { TextProps as RNTextProps } from 'react-native';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'bodySmall'
  | 'caption'
  | 'label'
  | 'overline';

export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
export type TextAlign = 'left' | 'center' | 'right';

export interface TextProps extends RNTextProps {
  variant?: TextVariant;
  weight?: TextWeight;
  color?: string;
  align?: TextAlign;
  children: React.ReactNode;
}

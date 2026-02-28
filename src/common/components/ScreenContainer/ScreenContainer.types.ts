import type { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';

export interface ScreenContainerProps {
  children: ReactNode;
  scrollable?: boolean;
  padded?: boolean;
  edges?: ('top' | 'bottom')[];
  style?: ViewStyle;
}

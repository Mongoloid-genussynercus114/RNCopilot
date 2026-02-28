import type { ViewProps } from 'react-native';

export interface CardProps extends ViewProps {
  variant?: 'filled' | 'elevated' | 'outlined';
  pressable?: boolean;
  onPress?: () => void;
  children: React.ReactNode;
}

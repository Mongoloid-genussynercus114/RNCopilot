import type { TextInputProps } from 'react-native';
import type { ComponentSize } from '@/common/components/shared.types';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  size?: ComponentSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

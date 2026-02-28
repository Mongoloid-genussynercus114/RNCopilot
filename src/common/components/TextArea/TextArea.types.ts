import type { InputProps } from '@/common/components/Input';

export interface TextAreaProps extends Omit<InputProps, 'secureTextEntry'> {
  numberOfLines?: number;
  maxLength?: number;
  showCount?: boolean;
}

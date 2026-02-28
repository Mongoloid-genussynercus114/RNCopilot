import type { ComponentSize } from '@/common/components/shared.types';

export interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onSubmit?: () => void;
  onClear?: () => void;
  loading?: boolean;
  autoFocus?: boolean;
  size?: ComponentSize;
}

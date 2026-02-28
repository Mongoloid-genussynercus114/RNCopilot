import type { ComponentSize } from '@/common/components/shared.types';

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  size?: ComponentSize;
  label?: string;
}

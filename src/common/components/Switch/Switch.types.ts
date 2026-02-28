import type { ComponentSize } from '@/common/components/shared.types';

export interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  size?: ComponentSize;
  label?: string;
}

import type { ReactNode } from 'react';
import type { ButtonVariant } from '@/common/components/Button';
import type { ComponentSize } from '@/common/components/shared.types';

export interface DialogAction {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
}

export interface DialogProps {
  visible: boolean;
  onDismiss: () => void;
  title?: string;
  message?: string;
  actions?: DialogAction[];
  children?: ReactNode;
  size?: ComponentSize;
}

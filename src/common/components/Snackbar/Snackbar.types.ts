export type SnackbarVariant = 'default' | 'success' | 'error';

export interface SnackbarAction {
  label: string;
  onPress: () => void;
}

export interface SnackbarProps {
  visible: boolean;
  message: string;
  action?: SnackbarAction;
  duration?: number;
  onDismiss: () => void;
  variant?: SnackbarVariant;
}

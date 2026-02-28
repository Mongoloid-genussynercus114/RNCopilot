export type ChipVariant = 'solid' | 'outline';
export type ChipSize = 'sm' | 'md';

export interface ChipProps {
  label: string;
  variant?: ChipVariant;
  size?: ChipSize;
  selected?: boolean;
  onPress?: () => void;
  onClose?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

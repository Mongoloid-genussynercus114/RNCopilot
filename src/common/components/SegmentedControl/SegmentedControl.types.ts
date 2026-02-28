export interface SegmentOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export type SegmentedControlSize = 'sm' | 'md';

export interface SegmentedControlProps {
  value: string;
  onChange: (value: string) => void;
  options: SegmentOption[];
  size?: SegmentedControlSize;
  disabled?: boolean;
}

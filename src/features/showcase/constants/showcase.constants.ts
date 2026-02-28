import type { SelectOption } from '@/common/components';

export const RADIO_OPTION_KEYS = [
  'showcase.demo.option1',
  'showcase.demo.option2',
  'showcase.demo.option3',
] as const;

export const SELECT_OPTIONS: SelectOption[] = [
  { value: 'react-native', label: 'React Native' },
  { value: 'expo', label: 'Expo' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'zustand', label: 'Zustand' },
];

export const SEGMENT_OPTIONS = [
  { value: 'tab1', label: 'Tab 1' },
  { value: 'tab2', label: 'Tab 2' },
  { value: 'tab3', label: 'Tab 3' },
];

export const ACCORDION_IDS = {
  ITEM_1: 'acc-1',
  ITEM_2: 'acc-2',
  ITEM_3: 'acc-3',
} as const;

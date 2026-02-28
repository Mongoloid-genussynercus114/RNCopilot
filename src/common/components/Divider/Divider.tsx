import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import type { DividerProps } from './Divider.types';

export function Divider({ orientation = 'horizontal', bold = false, inset = false }: DividerProps) {
  const isVertical = orientation === 'vertical';

  return (
    <View
      style={[
        isVertical ? styles.vertical : styles.horizontal,
        bold && (isVertical ? styles.boldVertical : styles.boldHorizontal),
        inset && styles.inset,
      ]}
    />
  );
}

const styles = StyleSheet.create((theme) => ({
  horizontal: {
    height: 1,
    backgroundColor: theme.colors.border.default,
    width: '100%',
  },
  vertical: {
    width: 1,
    backgroundColor: theme.colors.border.default,
    alignSelf: 'stretch',
  },
  boldHorizontal: {
    height: 2,
  },
  boldVertical: {
    width: 2,
  },
  inset: {
    marginHorizontal: theme.metrics.spacing.p16,
  },
}));

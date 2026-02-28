import { StyleSheet } from 'react-native-unistyles';
import { hs } from '@/theme/metrics';

export const styles = StyleSheet.create((theme) => ({
  base: {
    color: theme.colors.text.primary,
  },

  // Variants
  h1: {
    fontSize: theme.fonts.size['3xl'],
    fontWeight: 'bold',
  },
  h2: {
    fontSize: theme.fonts.size['2xl'],
    fontWeight: 'bold',
  },
  h3: {
    fontSize: theme.fonts.size.xl,
    fontWeight: '600',
  },
  body: {
    fontSize: theme.fonts.size.md,
    fontWeight: '400',
  },
  bodySmall: {
    fontSize: theme.fonts.size.sm,
    fontWeight: '400',
  },
  caption: {
    fontSize: theme.fonts.size.xs,
    fontWeight: '400',
  },
  label: {
    fontSize: theme.fonts.size.sm,
    fontWeight: '600',
  },
  overline: {
    fontSize: theme.fonts.size.xxs,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: hs(1),
  },

  // Weights
  regular: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: 'bold' },

  // Alignment
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
}));

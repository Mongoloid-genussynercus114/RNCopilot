import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.metrics.borderRadius.lg,
    gap: theme.metrics.spacing.p8,
  },
  primary: {
    backgroundColor: theme.colors.brand.primary,
  },
  secondary: {
    backgroundColor: theme.colors.background.surfaceAlt,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.border.default,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  sm: {
    paddingHorizontal: theme.metrics.spacing.p12,
    paddingVertical: theme.metrics.spacingV.p8,
  },
  md: {
    paddingHorizontal: theme.metrics.spacing.p16,
    paddingVertical: theme.metrics.spacingV.p12,
  },
  lg: {
    paddingHorizontal: theme.metrics.spacing.p24,
    paddingVertical: theme.metrics.spacingV.p16,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  primaryText: {
    color: theme.colors.text.inverse,
    fontWeight: '600',
  },
  secondaryText: {
    color: theme.colors.text.primary,
    fontWeight: '600',
  },
  outlineText: {
    color: theme.colors.brand.primary,
    fontWeight: '600',
  },
  ghostText: {
    color: theme.colors.brand.primary,
    fontWeight: '600',
  },
  smText: {
    fontSize: theme.fonts.size.sm,
  },
  mdText: {
    fontSize: theme.fonts.size.md,
  },
  lgText: {
    fontSize: theme.fonts.size.lg,
  },
}));

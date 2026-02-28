import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
  wrapper: {
    gap: theme.metrics.spacingV.p4,
  },
  label: {
    color: theme.colors.text.secondary,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background.input,
    borderRadius: theme.metrics.borderRadius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border.default,
    paddingHorizontal: theme.metrics.spacing.p12,
    gap: theme.metrics.spacing.p8,
  },
  inputContainerFocused: {
    borderColor: theme.colors.border.focus,
  },
  inputContainerError: {
    borderColor: theme.colors.state.error,
  },
  inputContainerDisabled: {
    opacity: 0.5,
  },
  input: {
    flex: 1,
    paddingVertical: theme.metrics.spacingV.p12,
    fontSize: theme.fonts.size.md,
    color: theme.colors.text.primary,
  },
  inputDisabled: {
    color: theme.colors.text.muted,
  },
  error: {
    color: theme.colors.state.error,
  },
  helperText: {
    color: theme.colors.text.muted,
  },
}));

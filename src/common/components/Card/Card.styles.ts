import { StyleSheet } from 'react-native-unistyles';
import { hs } from '@/theme/metrics';

export const styles = StyleSheet.create((theme) => ({
  card: {
    backgroundColor: theme.colors.background.surface,
    borderRadius: theme.metrics.borderRadius.xl,
    padding: theme.metrics.spacing.p16,
  },
  elevated: {
    backgroundColor: theme.colors.background.elevated,
    elevation: theme.colors.shadow.elevationMedium,
    shadowColor: theme.colors.shadow.color,
    shadowOffset: { width: 0, height: hs(2) },
    shadowOpacity: 0.1,
    shadowRadius: hs(8),
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.border.default,
  },
}));

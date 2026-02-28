import { StyleSheet, type UnistylesVariants } from 'react-native-unistyles';
import { hs } from '@/theme/metrics';

export const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row' as const,
    backgroundColor: theme.colors.background.surfaceAlt,
    borderRadius: theme.metrics.borderRadius.md,
    position: 'relative' as const,
    overflow: 'hidden' as const,
    variants: {
      size: {
        sm: {
          padding: hs(2),
        },
        md: {
          padding: hs(3),
        },
      },
      disabled: {
        true: {
          opacity: 0.5,
        },
      },
    },
  },
  indicator: {
    position: 'absolute' as const,
    top: hs(3),
    bottom: hs(3),
    left: hs(3),
    backgroundColor: theme.colors.background.surface,
    borderRadius: theme.metrics.borderRadius.md,
    elevation: 1,
    shadowColor: theme.colors.shadow.color,
    shadowOffset: { width: 0, height: hs(1) },
    shadowOpacity: 0.1,
    shadowRadius: hs(2),
  },
  segment: {
    flex: 1,
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    paddingVertical: theme.metrics.spacingV.p8,
    paddingHorizontal: theme.metrics.spacing.p12,
    gap: theme.metrics.spacing.p4,
    zIndex: 1,
  },
  segmentIcon: {
    marginRight: theme.metrics.spacing.p4,
  },
  selectedText: {
    color: theme.colors.text.primary,
  },
  unselectedText: {
    color: theme.colors.text.secondary,
  },
}));

export type SegmentedControlStyleVariants = UnistylesVariants<typeof styles>;

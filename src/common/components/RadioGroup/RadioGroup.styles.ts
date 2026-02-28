import { StyleSheet, type UnistylesVariants } from 'react-native-unistyles';
import { hs } from '@/theme/metrics';

export const styles = StyleSheet.create((theme) => ({
  container: {
    gap: theme.metrics.spacingV.p8,
    variants: {
      orientation: {
        vertical: {},
        horizontal: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: theme.metrics.spacing.p16,
        },
      },
    },
  },
  option: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    gap: theme.metrics.spacing.p8,
    paddingVertical: theme.metrics.spacingV.p4,
  },
  optionDisabled: {
    opacity: 0.5,
  },
  radio: {
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    borderWidth: 2,
    borderColor: theme.colors.border.default,
    variants: {
      size: {
        sm: {
          width: hs(18),
          height: hs(18),
          borderRadius: hs(9),
        },
        md: {
          width: hs(22),
          height: hs(22),
          borderRadius: hs(11),
        },
        lg: {
          width: hs(26),
          height: hs(26),
          borderRadius: hs(13),
        },
      },
    },
  },
  radioSelected: {
    borderColor: theme.colors.brand.primary,
  },
  radioDot: {
    backgroundColor: theme.colors.brand.primary,
    variants: {
      size: {
        sm: {
          width: hs(8),
          height: hs(8),
          borderRadius: hs(4),
        },
        md: {
          width: hs(10),
          height: hs(10),
          borderRadius: hs(5),
        },
        lg: {
          width: hs(12),
          height: hs(12),
          borderRadius: hs(6),
        },
      },
    },
  },
}));

export type RadioGroupStyleVariants = UnistylesVariants<typeof styles>;

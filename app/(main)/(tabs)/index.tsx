import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { ScreenContainer, Snackbar, Text } from '@/common/components';
import {
  ActionSection,
  DataDisplaySection,
  DisclosureSection,
  FeedbackSection,
  FormSection,
  LayoutSection,
  OverlaySection,
  TypographySection,
} from '@/features/showcase/components';
import { useShowcaseState } from '@/features/showcase/hooks/useShowcaseState';

export default function HomeTab() {
  const { t } = useTranslation();
  const showcaseState = useShowcaseState();

  return (
    <View style={styles.screen}>
      <ScreenContainer scrollable edges={['top', 'bottom']}>
        <View style={styles.header}>
          <Text variant="h1">{t('showcase.title')}</Text>
          <Text variant="bodySmall" color="secondary">
            {t('showcase.subtitle')}
          </Text>
        </View>

        <TypographySection />
        <ActionSection />
        <DataDisplaySection />
        <FormSection state={showcaseState} />
        <FeedbackSection state={showcaseState} />
        <DisclosureSection />
        <LayoutSection />
        <OverlaySection state={showcaseState} />

        <View style={styles.footer} />
      </ScreenContainer>
      <Snackbar
        visible={showcaseState.snackbarVisible}
        message={showcaseState.snackbarMessage}
        variant={showcaseState.snackbarVariant}
        onDismiss={showcaseState.dismissSnackbar}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  screen: {
    flex: 1,
  },
  header: {
    paddingTop: theme.metrics.spacingV.p16,
    gap: theme.metrics.spacingV.p4,
  },
  footer: {
    height: theme.metrics.spacingV.p48,
  },
}));

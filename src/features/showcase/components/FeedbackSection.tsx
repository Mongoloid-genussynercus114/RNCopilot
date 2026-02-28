import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Button, EmptyState, Loading, ProgressBar, Skeleton, Text } from '@/common/components';
import type { ShowcaseState } from '../hooks/useShowcaseState';
import { SectionHeader } from './SectionHeader';

interface FeedbackSectionProps {
  state: ShowcaseState;
}

export function FeedbackSection({ state }: FeedbackSectionProps) {
  const { t } = useTranslation();

  return (
    <View>
      <SectionHeader titleKey="showcase.sections.feedback" />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.feedback.snackbar')}
      </Text>
      <View style={styles.row}>
        <Button
          title={t('showcase.feedback.showDefault')}
          variant="outline"
          size="sm"
          onPress={() => state.showSnackbar('neutral', t('showcase.feedback.defaultMessage'))}
        />
        <Button
          title={t('showcase.feedback.showSuccess')}
          variant="outline"
          size="sm"
          onPress={() => state.showSnackbar('success', t('showcase.feedback.successMessage'))}
        />
        <Button
          title={t('showcase.feedback.showError')}
          variant="outline"
          size="sm"
          onPress={() => state.showSnackbar('error', t('showcase.feedback.errorMessage'))}
        />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.feedback.progressBar')}
      </Text>
      <View style={styles.column}>
        <ProgressBar value={30} size="sm" colorScheme="primary" />
        <ProgressBar value={60} size="md" colorScheme="success" />
        <ProgressBar value={80} size="lg" colorScheme="warning" />
        <ProgressBar indeterminate size="md" colorScheme="primary" />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.feedback.skeleton')}
      </Text>
      <View style={styles.column}>
        <Skeleton variant="text" width="80%" height={20} />
        <Skeleton variant="text" width="60%" height={20} />
        <View style={styles.row}>
          <Skeleton variant="circle" width={40} height={40} />
          <View style={styles.skeletonTextGroup}>
            <Skeleton variant="text" width="70%" height={16} />
            <Skeleton variant="text" width="50%" height={16} />
          </View>
        </View>
        <Skeleton variant="rect" width="100%" height={80} />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.feedback.loading')}
      </Text>
      <View style={styles.column}>
        <Loading size="small" />
        <Loading size="large" />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.feedback.emptyState')}
      </Text>
      <EmptyState
        title={t('showcase.feedback.nothingHere')}
        message={t('showcase.feedback.nothingHereMessage')}
        actionLabel={t('showcase.feedback.addItems')}
        onAction={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  subheading: {
    marginTop: theme.metrics.spacingV.p12,
    marginBottom: theme.metrics.spacingV.p8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.metrics.spacing.p8,
    marginBottom: theme.metrics.spacingV.p4,
  },
  column: {
    gap: theme.metrics.spacingV.p8,
    marginBottom: theme.metrics.spacingV.p4,
  },
  skeletonTextGroup: {
    flex: 1,
    gap: theme.metrics.spacingV.p4,
  },
}));

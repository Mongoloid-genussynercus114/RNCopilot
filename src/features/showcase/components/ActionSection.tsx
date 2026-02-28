import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Button, Icon, IconButton, Text } from '@/common/components';
import { SectionHeader } from './SectionHeader';

export function ActionSection() {
  const { t } = useTranslation();

  return (
    <View>
      <SectionHeader titleKey="showcase.sections.action" />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.action.variants')}
      </Text>
      <View style={styles.row}>
        <Button title={t('showcase.action.primary')} variant="primary" />
        <Button title={t('showcase.action.secondary')} variant="secondary" />
      </View>
      <View style={styles.row}>
        <Button title={t('showcase.action.outline')} variant="outline" />
        <Button title={t('showcase.action.ghost')} variant="ghost" />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.action.sizes')}
      </Text>
      <View style={styles.column}>
        <Button title={t('showcase.action.primary')} size="lg" />
        <Button title={t('showcase.action.primary')} size="md" />
        <Button title={t('showcase.action.primary')} size="sm" />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.action.states')}
      </Text>
      <View style={styles.column}>
        <Button
          title={t('showcase.action.withIcon')}
          leftIcon={<Icon name="star-outline" size={16} color="#fff" />}
        />
        <Button title={t('showcase.action.loading')} loading />
        <Button title={t('showcase.action.disabled')} disabled />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.action.iconButtons')}
      </Text>
      <View style={styles.row}>
        <IconButton
          icon="heart-outline"
          variant="primary"
          accessibilityLabel={t('showcase.action.primary')}
        />
        <IconButton
          icon="share-outline"
          variant="secondary"
          accessibilityLabel={t('showcase.action.secondary')}
        />
        <IconButton
          icon="bookmark-outline"
          variant="outline"
          accessibilityLabel={t('showcase.action.outline')}
        />
        <IconButton
          icon="ellipsis-horizontal"
          variant="ghost"
          accessibilityLabel={t('showcase.action.ghost')}
        />
      </View>
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
}));

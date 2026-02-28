import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Icon, Text } from '@/common/components';
import { SectionHeader } from './SectionHeader';

export function TypographySection() {
  const { t } = useTranslation();

  return (
    <View>
      <SectionHeader titleKey="showcase.sections.typography" />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.typography.textVariants')}
      </Text>
      <View style={styles.column}>
        <Text variant="h1">{t('showcase.typography.heading1')}</Text>
        <Text variant="h2">{t('showcase.typography.heading2')}</Text>
        <Text variant="h3">{t('showcase.typography.heading3')}</Text>
        <Text variant="body">{t('showcase.typography.body')}</Text>
        <Text variant="bodySmall">{t('showcase.typography.bodySmall')}</Text>
        <Text variant="caption">{t('showcase.typography.caption')}</Text>
        <Text variant="label">{t('showcase.typography.label')}</Text>
        <Text variant="overline">{t('showcase.typography.overline')}</Text>
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.typography.textWeights')}
      </Text>
      <View style={styles.column}>
        <Text variant="body" weight="regular">
          {t('showcase.typography.regular')}
        </Text>
        <Text variant="body" weight="medium">
          {t('showcase.typography.medium')}
        </Text>
        <Text variant="body" weight="semibold">
          {t('showcase.typography.semibold')}
        </Text>
        <Text variant="body" weight="bold">
          {t('showcase.typography.bold')}
        </Text>
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.typography.iconVariants')}
      </Text>
      <View style={styles.row}>
        <Icon name="star" variant="primary" />
        <Icon name="star" variant="secondary" />
        <Icon name="star" variant="tertiary" />
        <Icon name="star" variant="accent" />
        <Icon name="star" variant="muted" />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.typography.iconSizes')}
      </Text>
      <View style={styles.row}>
        <Icon name="heart" size={16} variant="primary" />
        <Icon name="heart" size={20} variant="primary" />
        <Icon name="heart" size={24} variant="primary" />
        <Icon name="heart" size={32} variant="primary" />
        <Icon name="heart" size={40} variant="primary" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  subheading: {
    marginTop: theme.metrics.spacingV.p12,
    marginBottom: theme.metrics.spacingV.p8,
  },
  column: {
    gap: theme.metrics.spacingV.p4,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: theme.metrics.spacing.p12,
    marginBottom: theme.metrics.spacingV.p4,
  },
}));

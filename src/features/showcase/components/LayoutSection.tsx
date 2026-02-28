import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Divider, Text } from '@/common/components';
import { SectionHeader } from './SectionHeader';

export function LayoutSection() {
  const { t } = useTranslation();

  return (
    <View>
      <SectionHeader titleKey="showcase.sections.layout" />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.layout.horizontal')}
      </Text>
      <Divider orientation="horizontal" />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.layout.bold')}
      </Text>
      <Divider orientation="horizontal" bold />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.layout.inset')}
      </Text>
      <Divider orientation="horizontal" inset />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.layout.vertical')}
      </Text>
      <View style={styles.verticalRow}>
        <Text variant="body">{t('showcase.layout.left')}</Text>
        <Divider orientation="vertical" />
        <Text variant="body">{t('showcase.layout.center')}</Text>
        <Divider orientation="vertical" />
        <Text variant="body">{t('showcase.layout.right')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  subheading: {
    marginTop: theme.metrics.spacingV.p12,
    marginBottom: theme.metrics.spacingV.p8,
  },
  verticalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.metrics.spacing.p12,
    height: theme.metrics.spacingV.p32,
  },
}));

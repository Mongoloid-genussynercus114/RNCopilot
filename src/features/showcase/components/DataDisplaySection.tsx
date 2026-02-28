import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Avatar, Badge, Card, Chip, ListItem, Text } from '@/common/components';
import { SectionHeader } from './SectionHeader';

export function DataDisplaySection() {
  const { t } = useTranslation();

  return (
    <View>
      <SectionHeader titleKey="showcase.sections.dataDisplay" />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.dataDisplay.avatarSizes')}
      </Text>
      <View style={styles.row}>
        <Avatar initials="XS" size="xs" />
        <Avatar initials="SM" size="sm" />
        <Avatar initials="MD" size="md" />
        <Avatar initials="LG" size="lg" />
        <Avatar initials="XL" size="xl" />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.dataDisplay.badgeVariants')}
      </Text>
      <View style={styles.row}>
        <Badge variant="solid" colorScheme="primary" count={5} />
        <Badge variant="solid" colorScheme="success" count={12} />
        <Badge variant="outline" colorScheme="warning" count={3} />
        <Badge variant="dot" colorScheme="error" />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.dataDisplay.chipVariants')}
      </Text>
      <View style={styles.row}>
        <Chip label="React Native" variant="solid" />
        <Chip label="Expo" variant="outline" />
        <Chip label="TypeScript" variant="solid" selected />
        <Chip label="Zustand" variant="outline" onClose={() => {}} />
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.dataDisplay.cardVariants')}
      </Text>
      <View style={styles.column}>
        <Card variant="filled">
          <Text variant="label">{t('showcase.dataDisplay.defaultCard')}</Text>
        </Card>
        <Card variant="elevated">
          <Text variant="label">{t('showcase.dataDisplay.elevatedCard')}</Text>
        </Card>
        <Card variant="outlined">
          <Text variant="label">{t('showcase.dataDisplay.outlinedCard')}</Text>
        </Card>
      </View>

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.dataDisplay.listItems')}
      </Text>
      <View style={styles.column}>
        <ListItem
          title={t('showcase.demo.sampleTitle')}
          subtitle={t('showcase.demo.sampleText')}
          left={<Avatar initials="AB" size="sm" />}
          divider
        />
        <ListItem
          title={t('showcase.demo.sampleTitle')}
          left={<Avatar initials="CD" size="sm" />}
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
    alignItems: 'center',
    gap: theme.metrics.spacing.p8,
    marginBottom: theme.metrics.spacingV.p4,
  },
  column: {
    gap: theme.metrics.spacingV.p8,
    marginBottom: theme.metrics.spacingV.p4,
  },
}));

import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Accordion, Text } from '@/common/components';
import { ACCORDION_IDS } from '../constants/showcase.constants';
import { SectionHeader } from './SectionHeader';

export function DisclosureSection() {
  const { t } = useTranslation();

  const accordionItems = [
    {
      id: ACCORDION_IDS.ITEM_1,
      title: t('showcase.demo.accordionTitle1'),
      content: <Text variant="body">{t('showcase.demo.accordionContent1')}</Text>,
    },
    {
      id: ACCORDION_IDS.ITEM_2,
      title: t('showcase.demo.accordionTitle2'),
      content: <Text variant="body">{t('showcase.demo.accordionContent2')}</Text>,
    },
    {
      id: ACCORDION_IDS.ITEM_3,
      title: t('showcase.demo.accordionTitle3'),
      content: <Text variant="body">{t('showcase.demo.accordionContent3')}</Text>,
    },
  ];

  return (
    <View>
      <SectionHeader titleKey="showcase.sections.disclosure" />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.disclosure.singleExpand')}
      </Text>
      <Accordion items={accordionItems} />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.disclosure.multipleExpand')}
      </Text>
      <Accordion items={accordionItems} multiple />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  subheading: {
    marginTop: theme.metrics.spacingV.p12,
    marginBottom: theme.metrics.spacingV.p8,
  },
}));

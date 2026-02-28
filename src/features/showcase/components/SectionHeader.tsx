import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Divider, Text } from '@/common/components';

interface SectionHeaderProps {
  titleKey: string;
}

export function SectionHeader({ titleKey }: SectionHeaderProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Divider />
      <Text variant="h2" style={styles.title}>
        {t(titleKey as never)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    marginTop: theme.metrics.spacingV.p24,
    marginBottom: theme.metrics.spacingV.p12,
    gap: theme.metrics.spacingV.p12,
  },
  title: {
    color: theme.colors.brand.primary,
  },
}));

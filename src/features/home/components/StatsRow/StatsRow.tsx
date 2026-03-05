import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { Card, Text } from '@/common/components';
import { STAT_ITEMS } from '../../constants/home.constants';

export function StatsRow() {
  const { t } = useTranslation();
  const { theme } = useUnistyles();

  return (
    <View style={styles.container}>
      {STAT_ITEMS.map((stat) => (
        <Card key={stat.id} variant="elevated" style={styles.card}>
          <Text variant="caption" color="secondary">
            {t(stat.labelKey)}
          </Text>
          <Text variant="h2">{stat.value}</Text>
          <Text
            variant="caption"
            style={{ color: stat.positive ? theme.colors.state.success : theme.colors.state.error }}
          >
            {stat.change}
          </Text>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    gap: theme.metrics.spacing.p12,
  },
  card: {
    flex: 1,
    gap: theme.metrics.spacingV.p4,
  },
}));

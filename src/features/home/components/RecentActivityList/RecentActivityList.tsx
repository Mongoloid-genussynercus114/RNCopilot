import { useTranslation } from 'react-i18next';
import { Pressable, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { Avatar, Card, Icon, ListItem, Text } from '@/common/components';
import { ACTIVITY_ITEMS } from '../../constants/home.constants';

export function RecentActivityList() {
  const { t } = useTranslation();
  const { theme } = useUnistyles();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="h3">{t('home.recentActivity.title')}</Text>
        <Pressable>
          <Text variant="bodySmall" color="accent">
            {t('home.recentActivity.seeAll')}
          </Text>
        </Pressable>
      </View>
      <Card variant="filled" style={styles.card}>
        {ACTIVITY_ITEMS.map((item, index) => (
          <ListItem
            key={item.id}
            title={t(item.titleKey)}
            subtitle={t(item.subtitleKey)}
            left={
              <Avatar
                size="sm"
                icon={<Icon name={item.icon} size={16} color={theme.colors.icon[item.iconColor]} />}
              />
            }
            right={
              <Text variant="caption" color="tertiary">
                {t(item.timeKey)}
              </Text>
            }
            divider={index < ACTIVITY_ITEMS.length - 1}
          />
        ))}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    gap: theme.metrics.spacingV.p12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
}));

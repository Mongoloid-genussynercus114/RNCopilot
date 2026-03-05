import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { Avatar, Icon, SearchBar, Text } from '@/common/components';

function getGreetingKey() {
  const hour = new Date().getHours();
  if (hour < 12) return 'home.greetingMorning' as const;
  if (hour < 17) return 'home.greetingAfternoon' as const;
  return 'home.greetingEvening' as const;
}

export function GreetingHeader() {
  const { t } = useTranslation();
  const { theme } = useUnistyles();
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.greetingGroup}>
          <Avatar initials="AJ" size="md" />
          <View>
            <Text variant="bodySmall" color="secondary">
              {t(getGreetingKey())}
            </Text>
            <Text variant="h3">{t('home.userName')}</Text>
          </View>
        </View>
        <View style={styles.bellWrapper}>
          <Icon name="notifications-outline" size={24} color={theme.colors.icon.secondary} />
        </View>
      </View>
      <SearchBar
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder={t('home.searchPlaceholder')}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    gap: theme.metrics.spacingV.p16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greetingGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.metrics.spacing.p12,
  },
  bellWrapper: {
    padding: theme.metrics.spacing.p8,
  },
}));

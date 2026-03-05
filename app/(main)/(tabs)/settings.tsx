import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { ScreenContainer, Switch, Text } from '@/common/components';
import { toggleDarkMode } from '@/theme/themeManager';

export default function SettingsTab() {
  const { t } = useTranslation();
  const { theme } = useUnistyles();
  const isDark = theme.colors.mode === 'dark';

  const handleThemeToggle = useCallback((value: boolean) => {
    toggleDarkMode(value);
  }, []);

  return (
    <ScreenContainer scrollable edges={['top']}>
      <View style={styles.header}>
        <Text variant="h1">{t('settings.title')}</Text>
      </View>

      <View style={styles.section}>
        <Text variant="bodySmall" color="secondary" style={styles.sectionTitle}>
          {t('settings.appearance')}
        </Text>
        <View style={styles.row}>
          <Switch value={isDark} onValueChange={handleThemeToggle} label={t('settings.darkMode')} />
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create((theme) => ({
  header: {
    paddingTop: theme.metrics.spacingV.p16,
  },
  section: {
    marginTop: theme.metrics.spacingV.p24,
    gap: theme.metrics.spacingV.p8,
  },
  sectionTitle: {
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  row: {
    backgroundColor: theme.colors.background.surface,
    borderRadius: theme.metrics.borderRadius.md,
    paddingHorizontal: theme.metrics.spacing.p16,
    paddingVertical: theme.metrics.spacingV.p12,
  },
}));

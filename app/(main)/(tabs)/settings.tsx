import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

export default function SettingsTab() {
  const { t } = useTranslation();
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Text style={styles.title}>{t('settings.title')}</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.app,
    paddingHorizontal: theme.metrics.spacing.p16,
  },
  title: {
    fontSize: theme.fonts.size['2xl'],
    fontWeight: 'bold',
    color: theme.colors.text.primary,
    marginTop: theme.metrics.spacingV.p16,
  },
}));

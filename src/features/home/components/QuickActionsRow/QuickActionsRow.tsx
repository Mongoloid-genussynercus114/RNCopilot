import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import { Pressable, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { Text } from '@/common/components';
import { QUICK_ACTIONS } from '../../constants/home.constants';

export function QuickActionsRow() {
  const { t } = useTranslation();
  const { theme } = useUnistyles();

  return (
    <View style={styles.container}>
      {QUICK_ACTIONS.map((action) => (
        <Pressable key={action.id} style={styles.actionItem}>
          <LinearGradient
            colors={theme.colors.gradient[action.gradientKey]}
            style={styles.iconCircle}
          >
            <Ionicons name={action.icon} size={22} color="#FFFFFF" />
          </LinearGradient>
          <Text variant="caption" color="secondary">
            {t(action.labelKey)}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: theme.metrics.spacingV.p8,
  },
  actionItem: {
    alignItems: 'center',
    gap: theme.metrics.spacingV.p8,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

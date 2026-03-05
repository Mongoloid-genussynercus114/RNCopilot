import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { Text } from '@/common/components';
import { FEATURED_CARDS } from '../../constants/home.constants';

export function FeaturedCardsRow() {
  const { t } = useTranslation();
  const { theme } = useUnistyles();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="h3">{t('home.featured.title')}</Text>
        <Pressable>
          <Text variant="bodySmall" color="accent">
            {t('home.featured.seeAll')}
          </Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {FEATURED_CARDS.map((card) => (
          <LinearGradient
            key={card.id}
            colors={theme.colors.gradient[card.gradientKey]}
            style={styles.card}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.cardIcon}>
              <Ionicons name={card.icon} size={28} color="rgba(255,255,255,0.9)" />
            </View>
            <Text variant="h3" style={styles.cardTitle}>
              {t(card.titleKey)}
            </Text>
            <Text variant="bodySmall" style={styles.cardSubtitle}>
              {t(card.subtitleKey)}
            </Text>
          </LinearGradient>
        ))}
      </ScrollView>
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
  scrollContent: {
    gap: theme.metrics.spacing.p12,
  },
  card: {
    width: 200,
    padding: theme.metrics.spacing.p20,
    borderRadius: theme.metrics.borderRadius.xl,
    gap: theme.metrics.spacingV.p8,
  },
  cardIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.metrics.spacingV.p4,
  },
  cardTitle: {
    color: '#FFFFFF',
  },
  cardSubtitle: {
    color: 'rgba(255,255,255,0.8)',
  },
}));

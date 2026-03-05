import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { ScreenContainer } from '@/common/components';
import { TAB_BAR_RESERVED_HEIGHT } from '@/common/components/TabBar';
import {
  FeaturedCardsRow,
  GreetingHeader,
  QuickActionsRow,
  RecentActivityList,
  StatsRow,
} from '@/features/home/components';

export default function HomeTab() {
  return (
    <ScreenContainer scrollable edges={['top', 'bottom']}>
      <View style={styles.content}>
        <GreetingHeader />
        <QuickActionsRow />
        <FeaturedCardsRow />
        <StatsRow />
        <RecentActivityList />
        <View style={styles.footer} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create((theme) => ({
  content: {
    paddingTop: theme.metrics.spacingV.p16,
    gap: theme.metrics.spacingV.p24,
  },
  footer: {
    height: TAB_BAR_RESERVED_HEIGHT,
  },
}));

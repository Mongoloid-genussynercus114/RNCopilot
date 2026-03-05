import type { ActivityItem, FeaturedCard, QuickAction, StatItem } from '../types/home.types';

export const QUICK_ACTIONS = [
  {
    id: 'send',
    labelKey: 'home.quickActions.send',
    icon: 'arrow-up-circle',
    gradientKey: 'primary',
  },
  {
    id: 'receive',
    labelKey: 'home.quickActions.receive',
    icon: 'arrow-down-circle',
    gradientKey: 'accent',
  },
  { id: 'pay', labelKey: 'home.quickActions.pay', icon: 'card', gradientKey: 'highlight' },
  { id: 'more', labelKey: 'home.quickActions.more', icon: 'grid', gradientKey: 'secondary' },
] as const satisfies readonly QuickAction[];

export const FEATURED_CARDS = [
  {
    id: 'design',
    titleKey: 'home.featured.card1Title',
    subtitleKey: 'home.featured.card1Subtitle',
    gradientKey: 'primary',
    icon: 'color-palette',
  },
  {
    id: 'analytics',
    titleKey: 'home.featured.card2Title',
    subtitleKey: 'home.featured.card2Subtitle',
    gradientKey: 'accent',
    icon: 'analytics',
  },
  {
    id: 'integrations',
    titleKey: 'home.featured.card3Title',
    subtitleKey: 'home.featured.card3Subtitle',
    gradientKey: 'highlight',
    icon: 'link',
  },
] as const satisfies readonly FeaturedCard[];

export const STAT_ITEMS = [
  { id: 'projects', labelKey: 'home.stats.projects', value: '12', change: '+3', positive: true },
  { id: 'tasks', labelKey: 'home.stats.tasks', value: '48', change: '-5', positive: false },
  { id: 'messages', labelKey: 'home.stats.messages', value: '7', change: '+2', positive: true },
] as const satisfies readonly StatItem[];

export const ACTIVITY_ITEMS = [
  {
    id: '1',
    titleKey: 'home.recentActivity.item1Title',
    subtitleKey: 'home.recentActivity.item1Subtitle',
    timeKey: 'home.recentActivity.item1Time',
    icon: 'folder',
    iconColor: 'primary',
  },
  {
    id: '2',
    titleKey: 'home.recentActivity.item2Title',
    subtitleKey: 'home.recentActivity.item2Subtitle',
    timeKey: 'home.recentActivity.item2Time',
    icon: 'checkmark-circle',
    iconColor: 'accent',
  },
  {
    id: '3',
    titleKey: 'home.recentActivity.item3Title',
    subtitleKey: 'home.recentActivity.item3Subtitle',
    timeKey: 'home.recentActivity.item3Time',
    icon: 'chatbubble',
    iconColor: 'secondary',
  },
  {
    id: '4',
    titleKey: 'home.recentActivity.item4Title',
    subtitleKey: 'home.recentActivity.item4Subtitle',
    timeKey: 'home.recentActivity.item4Time',
    icon: 'wallet',
    iconColor: 'tertiary',
  },
] as const satisfies readonly ActivityItem[];

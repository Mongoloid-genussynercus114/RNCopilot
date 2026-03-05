import type Ionicons from '@expo/vector-icons/Ionicons';
import type { ComponentProps } from 'react';

type IoniconsName = ComponentProps<typeof Ionicons>['name'];

export interface QuickAction {
  id: string;
  labelKey: string;
  icon: IoniconsName;
  gradientKey: 'primary' | 'secondary' | 'accent' | 'success' | 'highlight';
}

export interface FeaturedCard {
  id: string;
  titleKey: string;
  subtitleKey: string;
  gradientKey: 'primary' | 'secondary' | 'accent' | 'success' | 'highlight';
  icon: IoniconsName;
}

export interface StatItem {
  id: string;
  labelKey: string;
  value: string;
  change: string;
  positive: boolean;
}

export interface ActivityItem {
  id: string;
  titleKey: string;
  subtitleKey: string;
  timeKey: string;
  icon: IoniconsName;
  iconColor: 'primary' | 'accent' | 'secondary' | 'tertiary';
}

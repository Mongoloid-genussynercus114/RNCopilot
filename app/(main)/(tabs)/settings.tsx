import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import {
  Avatar,
  Badge,
  Button,
  Card,
  Divider,
  Icon,
  ListItem,
  ScreenContainer,
  Switch,
  Text,
} from '@/common/components';
import { TAB_BAR_RESERVED_HEIGHT } from '@/common/components/TabBar';
import { hs } from '@/theme/metrics';
import { toggleDarkMode } from '@/theme/themeManager';

export default function SettingsTab() {
  const { t } = useTranslation();
  const { theme } = useUnistyles();
  const isDark = theme.colors.mode === 'dark';
  const [pushNotifications, setPushNotifications] = useState(true);
  const [hapticFeedback, setHapticFeedback] = useState(true);

  const handleThemeToggle = useCallback((value: boolean) => {
    toggleDarkMode(value);
  }, []);

  const chevron = <Icon name="chevron-forward" variant="muted" sizeVariant="md" />;

  return (
    <ScreenContainer scrollable edges={['top']}>
      <View style={styles.content}>
        {/* Profile Header */}
        <View style={styles.profileSection}>
          <Avatar initials="AJ" size="xl" />
          <Text variant="h2">{t('settings.profile.name')}</Text>
          <Text variant="bodySmall" color="secondary">
            {t('settings.profile.email')}
          </Text>
          <Button
            variant="outline"
            size="sm"
            onPress={() => {}}
            title={t('settings.profile.editProfile')}
          />
        </View>

        <Divider />

        {/* Account */}
        <SectionLabel label={t('settings.sections.account')} />
        <Card variant="filled" style={styles.listCard}>
          <ListItem
            title={t('settings.account.profile')}
            subtitle={t('settings.account.profileSubtitle')}
            left={
              <IconBubble
                name="person"
                bg={theme.colors.overlay.pressed}
                color={theme.colors.brand.primary}
              />
            }
            right={chevron}
            onPress={() => {}}
            divider
          />
          <ListItem
            title={t('settings.account.security')}
            subtitle={t('settings.account.securitySubtitle')}
            left={
              <IconBubble
                name="shield-checkmark"
                bg={theme.colors.state.successBg}
                color={theme.colors.state.success}
              />
            }
            right={chevron}
            onPress={() => {}}
            divider
          />
          <ListItem
            title={t('settings.account.billing')}
            subtitle={t('settings.account.billingSubtitle')}
            left={
              <IconBubble
                name="card"
                bg={theme.colors.state.warningBg}
                color={theme.colors.state.warning}
              />
            }
            right={chevron}
            onPress={() => {}}
            divider
          />
          <ListItem
            title={t('settings.account.notifications')}
            subtitle={t('settings.account.notificationsSubtitle')}
            left={
              <IconBubble
                name="notifications"
                bg={theme.colors.state.errorBg}
                color={theme.colors.state.error}
              />
            }
            right={
              <View style={styles.badgeChevron}>
                <Badge count={3} colorScheme="error" size="sm" />
                {chevron}
              </View>
            }
            onPress={() => {}}
          />
        </Card>

        {/* Preferences */}
        <SectionLabel label={t('settings.sections.preferences')} />
        <Card variant="filled" style={styles.listCard}>
          <ListItem
            title={t('settings.darkMode')}
            left={
              <IconBubble
                name="moon"
                bg={theme.colors.overlay.pressed}
                color={theme.colors.brand.primary}
              />
            }
            right={<Switch value={isDark} onValueChange={handleThemeToggle} />}
            divider
          />
          <ListItem
            title={t('settings.language')}
            left={
              <IconBubble
                name="language"
                bg={theme.colors.state.infoBg}
                color={theme.colors.state.info}
              />
            }
            right={chevron}
            onPress={() => {}}
            divider
          />
          <ListItem
            title={t('settings.preferences.pushNotifications')}
            left={
              <IconBubble
                name="notifications-circle"
                bg={theme.colors.state.successBg}
                color={theme.colors.state.success}
              />
            }
            right={<Switch value={pushNotifications} onValueChange={setPushNotifications} />}
            divider
          />
          <ListItem
            title={t('settings.haptics')}
            left={
              <IconBubble
                name="phone-portrait"
                bg={theme.colors.state.warningBg}
                color={theme.colors.state.warning}
              />
            }
            right={<Switch value={hapticFeedback} onValueChange={setHapticFeedback} />}
            divider
          />
          <ListItem
            title={t('settings.preferences.appIcon')}
            subtitle={t('settings.preferences.appIconSubtitle')}
            left={<IconBubble name="apps" bg="rgba(124, 58, 237, 0.12)" color="#7C3AED" />}
            right={chevron}
            onPress={() => {}}
          />
        </Card>

        {/* Support */}
        <SectionLabel label={t('settings.sections.support')} />
        <Card variant="filled" style={styles.listCard}>
          <ListItem
            title={t('settings.support.helpCenter')}
            subtitle={t('settings.support.helpCenterSubtitle')}
            left={
              <IconBubble
                name="help-circle"
                bg={theme.colors.state.infoBg}
                color={theme.colors.state.info}
              />
            }
            right={chevron}
            onPress={() => {}}
            divider
          />
          <ListItem
            title={t('settings.support.feedback')}
            subtitle={t('settings.support.feedbackSubtitle')}
            left={
              <IconBubble
                name="chatbubble-ellipses"
                bg={theme.colors.state.successBg}
                color={theme.colors.state.success}
              />
            }
            right={chevron}
            onPress={() => {}}
            divider
          />
          <ListItem
            title={t('settings.about')}
            subtitle={t('settings.support.aboutSubtitle')}
            left={
              <IconBubble
                name="information-circle"
                bg={theme.colors.overlay.pressed}
                color={theme.colors.brand.primary}
              />
            }
            right={chevron}
            onPress={() => {}}
          />
        </Card>

        {/* Danger Zone */}
        <SectionLabel label={t('settings.sections.danger')} />
        <Card variant="filled" style={styles.listCard}>
          <ListItem
            title={t('settings.danger.logout')}
            subtitle={t('settings.danger.logoutSubtitle')}
            left={
              <IconBubble
                name="log-out"
                bg={theme.colors.state.errorBg}
                color={theme.colors.state.error}
              />
            }
            onPress={() => {}}
            divider
          />
          <ListItem
            title={t('settings.danger.deleteAccount')}
            subtitle={t('settings.danger.deleteAccountSubtitle')}
            left={
              <IconBubble
                name="trash"
                bg={theme.colors.state.errorBg}
                color={theme.colors.state.error}
              />
            }
            onPress={() => {}}
          />
        </Card>

        {/* Version */}
        <Text variant="caption" color="muted" style={styles.version}>
          {t('settings.version')} 1.0.0
        </Text>

        <View style={styles.footer} />
      </View>
    </ScreenContainer>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <Text variant="overline" color="tertiary" style={sectionStyles.label}>
      {label}
    </Text>
  );
}

function IconBubble({ name, bg, color }: { name: string; bg: string; color: string }) {
  return (
    <View style={[sectionStyles.iconBubble, { backgroundColor: bg }]}>
      <Icon name={name as React.ComponentProps<typeof Icon>['name']} size={20} color={color} />
    </View>
  );
}

const sectionStyles = StyleSheet.create((theme) => ({
  label: {
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: theme.metrics.spacingV.p24,
    marginBottom: theme.metrics.spacingV.p8,
    paddingHorizontal: theme.metrics.spacing.p4,
  },
  iconBubble: {
    width: hs(40),
    height: hs(40),
    borderRadius: theme.metrics.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const styles = StyleSheet.create((theme) => ({
  content: {
    paddingTop: theme.metrics.spacingV.p8,
  },
  profileSection: {
    alignItems: 'center',
    gap: theme.metrics.spacingV.p8,
    paddingVertical: theme.metrics.spacingV.p24,
  },
  listCard: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    overflow: 'hidden',
  },
  badgeChevron: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.metrics.spacing.p8,
  },
  version: {
    textAlign: 'center',
    marginTop: theme.metrics.spacingV.p24,
    marginBottom: theme.metrics.spacingV.p8,
  },
  footer: {
    height: TAB_BAR_RESERVED_HEIGHT,
  },
}));

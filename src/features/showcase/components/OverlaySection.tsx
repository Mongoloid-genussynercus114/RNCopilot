import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Button, Dialog, IconButton, Menu, Text } from '@/common/components';
import type { ShowcaseState } from '../hooks/useShowcaseState';
import { SectionHeader } from './SectionHeader';

interface OverlaySectionProps {
  state: ShowcaseState;
}

export function OverlaySection({ state }: OverlaySectionProps) {
  const { t } = useTranslation();

  return (
    <View>
      <SectionHeader titleKey="showcase.sections.overlay" />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.overlay.dialog')}
      </Text>
      <Button
        title={t('showcase.overlay.openDialog')}
        variant="outline"
        onPress={() => state.setDialogVisible(true)}
      />
      <Dialog
        visible={state.dialogVisible}
        onDismiss={() => state.setDialogVisible(false)}
        title={t('showcase.overlay.dialogTitle')}
        message={t('showcase.overlay.dialogMessage')}
        actions={[
          {
            label: t('common.cancel'),
            variant: 'ghost',
            onPress: () => state.setDialogVisible(false),
          },
          {
            label: t('common.confirm'),
            variant: 'primary',
            onPress: () => state.setDialogVisible(false),
          },
        ]}
      />

      <Text variant="label" color="secondary" style={styles.subheading}>
        {t('showcase.overlay.menu')}
      </Text>
      <Menu
        visible={state.menuVisible}
        onDismiss={() => state.setMenuVisible(false)}
        anchor={
          <IconButton
            icon="ellipsis-vertical"
            variant="outline"
            accessibilityLabel={t('showcase.overlay.openMenu')}
            onPress={() => state.setMenuVisible(true)}
          />
        }
        items={[
          {
            label: t('showcase.overlay.menuEdit'),
            icon: 'create-outline',
            onPress: () => state.setMenuVisible(false),
          },
          {
            label: t('showcase.overlay.menuShare'),
            icon: 'share-outline',
            onPress: () => state.setMenuVisible(false),
          },
          {
            label: t('showcase.overlay.menuArchive'),
            icon: 'archive-outline',
            onPress: () => state.setMenuVisible(false),
          },
          {
            label: t('showcase.overlay.menuDelete'),
            icon: 'trash-outline',
            destructive: true,
            onPress: () => state.setMenuVisible(false),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  subheading: {
    marginTop: theme.metrics.spacingV.p12,
    marginBottom: theme.metrics.spacingV.p8,
  },
}));

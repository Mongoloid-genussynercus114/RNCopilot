import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { I18nManager, Platform, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { ErrorBoundary } from '@/common/components/ErrorBoundary';
import i18n from '@/i18n/config';
import { QueryProvider } from '@/providers';
import { useAuthStore } from '@/providers/auth/authStore';
import { initializeTheme } from '@/theme/themeManager';

initializeTheme();

const isArabic = i18n.language === 'ar';
if (Platform.OS !== 'web') {
  I18nManager.allowRTL(isArabic);
  I18nManager.forceRTL(isArabic);
}

function useAuthInit() {
  const initialize = useAuthStore((s) => s.initialize);
  const cleanup = useAuthStore((s) => s.cleanup);

  useEffect(() => {
    initialize();
    return () => cleanup();
  }, [initialize, cleanup]);
}

function RootNavigator() {
  const { theme } = useUnistyles();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.background.app },
      }}
      initialRouteName="(main)"
    >
      <Stack.Screen name="(main)" />
    </Stack>
  );
}

function AppContent() {
  useAuthInit();

  return (
    <View style={styles.appContainer}>
      <RootNavigator />
      <Toast />
    </View>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.rootView}>
      <ErrorBoundary>
        <QueryProvider>
          <BottomSheetModalProvider>
            <AppContent />
          </BottomSheetModalProvider>
        </QueryProvider>
      </ErrorBoundary>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create((theme) => ({
  rootView: {
    flex: 1,
    backgroundColor: theme.colors.background.app,
  },
  appContainer: {
    flex: 1,
    backgroundColor: theme.colors.background.app,
  },
}));

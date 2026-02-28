import { View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';
import type { ScreenContainerProps } from './ScreenContainer.types';

export function ScreenContainer({
  children,
  scrollable = false,
  padded = true,
  edges = ['top'],
  style,
}: ScreenContainerProps) {
  const insets = useSafeAreaInsets();

  const edgeStyles = {
    ...(edges.includes('top') && { paddingTop: insets.top }),
    ...(edges.includes('bottom') && { paddingBottom: insets.bottom }),
  };

  if (scrollable) {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={[edgeStyles, padded && styles.padded, style]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    );
  }

  return (
    <View style={[styles.container, edgeStyles, padded && styles.padded, style]}>{children}</View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.app,
  },
  padded: {
    paddingHorizontal: theme.metrics.spacing.p16,
  },
}));

import { View, TextInput, Pressable, ActivityIndicator } from 'react-native';
import { useUnistyles, StyleSheet } from 'react-native-unistyles';
import { Icon } from '@/common/components/Icon';
import type { SearchBarProps } from './SearchBar.types';

export function SearchBar({
  value,
  onChangeText,
  placeholder,
  onSubmit,
  onClear,
  loading = false,
  autoFocus = false,
}: SearchBarProps) {
  const { theme } = useUnistyles();

  const handleClear = () => {
    onChangeText('');
    onClear?.();
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={theme.metrics.iconSize.md} variant="muted" />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.text.muted}
        returnKeyType="search"
        onSubmitEditing={onSubmit}
        autoFocus={autoFocus}
        autoCorrect={false}
        accessibilityLabel={placeholder ?? 'Search'}
      />
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.text.muted} />
      ) : (
        value.length > 0 && (
          <Pressable
            onPress={handleClear}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Clear search"
          >
            <Icon name="close-circle" size={theme.metrics.iconSize.md} variant="muted" />
          </Pressable>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background.input,
    borderRadius: theme.metrics.borderRadius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border.default,
    paddingHorizontal: theme.metrics.spacing.p12,
    gap: theme.metrics.spacing.p8,
  },
  input: {
    flex: 1,
    paddingVertical: theme.metrics.spacingV.p12,
    fontSize: theme.fonts.size.md,
    color: theme.colors.text.primary,
  },
}));

import { View, TextInput, Pressable, ActivityIndicator } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { Icon } from '@/common/components/Icon';
import { styles } from './SearchBar.styles';
import type { SearchBarProps } from './SearchBar.types';

export function SearchBar({
  value,
  onChangeText,
  placeholder,
  onSubmit,
  onClear,
  loading = false,
  autoFocus = false,
  size = 'md',
}: SearchBarProps) {
  const { theme } = useUnistyles();

  styles.useVariants({ size });

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

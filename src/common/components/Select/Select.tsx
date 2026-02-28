import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef } from 'react';
import { Pressable, View } from 'react-native';
import type { ListRenderItem } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { Icon } from '@/common/components/Icon';
import { Text } from '@/common/components/Text';
import { styles } from './Select.styles';
import type { SelectOption, SelectProps } from './Select.types';

export function Select({
  value,
  onChange,
  options,
  placeholder,
  label,
  error,
  disabled = false,
  size = 'md',
}: SelectProps) {
  const { theme } = useUnistyles();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['40%', '60%'], []);

  styles.useVariants({ size, error: !!error, disabled, selected: value !== '' });

  const selectedOption = options.find((o) => o.value === value);
  const displayText = selectedOption?.label ?? placeholder ?? '';

  const handleOpen = useCallback(() => {
    if (!disabled) {
      bottomSheetRef.current?.expand();
    }
  }, [disabled]);

  const handleSelect = useCallback(
    (optionValue: string) => {
      onChange(optionValue);
      bottomSheetRef.current?.close();
    },
    [onChange]
  );

  const renderItem: ListRenderItem<SelectOption> = useCallback(
    ({ item }) => (
      <Pressable
        onPress={() => handleSelect(item.value)}
        disabled={item.disabled}
        style={styles.option}
        accessibilityRole="radio"
        accessibilityState={{ selected: item.value === value, disabled: item.disabled }}
      >
        <Text variant="body" style={styles.optionText}>
          {item.label}
        </Text>
        {item.value === value && (
          <Icon
            name="checkmark"
            size={theme.metrics.iconSize.lg}
            color={theme.colors.brand.primary}
          />
        )}
      </Pressable>
    ),
    [handleSelect, value, theme.colors.brand.primary, theme.metrics.iconSize.lg]
  );

  return (
    <View style={styles.wrapper}>
      {label && (
        <Text variant="label" style={styles.label}>
          {label}
        </Text>
      )}
      <Pressable
        onPress={handleOpen}
        disabled={disabled}
        accessibilityRole="combobox"
        accessibilityState={{ expanded: false, disabled }}
        style={styles.trigger}
      >
        <Text variant="body" style={selectedOption ? styles.selectedText : styles.placeholderText}>
          {displayText}
        </Text>
        <Icon name="chevron-down" size={theme.metrics.iconSize.md} variant="muted" />
      </Pressable>
      {error && (
        <Text variant="caption" style={styles.errorText}>
          {error}
        </Text>
      )}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backgroundStyle={styles.sheetBackground}
        handleIndicatorStyle={styles.sheetHandle}
      >
        <BottomSheetFlatList
          data={options}
          keyExtractor={(item: SelectOption) => item.value}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      </BottomSheet>
    </View>
  );
}

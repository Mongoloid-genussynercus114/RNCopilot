import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef } from 'react';
import { Pressable, View } from 'react-native';
import type { ListRenderItem } from 'react-native';
import { useUnistyles, StyleSheet } from 'react-native-unistyles';
import { Icon } from '@/common/components/Icon';
import { Text } from '@/common/components/Text';
import type { SelectOption, SelectProps } from './Select.types';

export function Select({
  value,
  onChange,
  options,
  placeholder,
  label,
  error,
  disabled = false,
}: SelectProps) {
  const { theme } = useUnistyles();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['40%', '60%'], []);

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
        style={[styles.option, item.disabled && styles.optionDisabled]}
        accessibilityRole="radio"
        accessibilityState={{ selected: item.value === value, disabled: item.disabled }}
      >
        <Text
          variant="body"
          style={item.value === value ? styles.optionTextSelected : styles.optionText}
        >
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
        style={[styles.trigger, error && styles.triggerError, disabled && styles.triggerDisabled]}
      >
        <Text variant="body" style={selectedOption ? styles.selectedText : styles.placeholderText}>
          {displayText}
        </Text>
        <Icon name="chevron-down" size={theme.metrics.iconSize.md} variant="muted" />
      </Pressable>
      {error && (
        <Text variant="caption" style={styles.error}>
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

const styles = StyleSheet.create((theme) => ({
  wrapper: {
    gap: theme.metrics.spacingV.p4,
  },
  label: {
    color: theme.colors.text.secondary,
  },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.background.input,
    borderRadius: theme.metrics.borderRadius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border.default,
    paddingHorizontal: theme.metrics.spacing.p12,
    paddingVertical: theme.metrics.spacingV.p12,
  },
  triggerError: {
    borderColor: theme.colors.state.error,
  },
  triggerDisabled: {
    opacity: 0.5,
  },
  selectedText: {
    color: theme.colors.text.primary,
  },
  placeholderText: {
    color: theme.colors.text.muted,
  },
  error: {
    color: theme.colors.state.error,
  },
  sheetBackground: {
    backgroundColor: theme.colors.background.surface,
  },
  sheetHandle: {
    backgroundColor: theme.colors.border.default,
  },
  listContent: {
    paddingVertical: theme.metrics.spacingV.p8,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.metrics.spacingV.p12,
    paddingHorizontal: theme.metrics.spacing.p16,
  },
  optionDisabled: {
    opacity: 0.5,
  },
  optionText: {
    color: theme.colors.text.primary,
  },
  optionTextSelected: {
    color: theme.colors.brand.primary,
  },
}));

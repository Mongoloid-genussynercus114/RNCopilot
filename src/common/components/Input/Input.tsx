import { useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { Icon } from '@/common/components/Icon';
import { Text } from '@/common/components/Text';
import { styles } from './Input.styles';
import type { InputProps } from './Input.types';

export function Input({
  label,
  error,
  helperText,
  disabled = false,
  leftIcon,
  rightIcon,
  secureTextEntry,
  style,
  ...rest
}: InputProps) {
  const [focused, setFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { theme } = useUnistyles();

  const isPassword = secureTextEntry !== undefined;
  const shouldObscure = isPassword && !passwordVisible;

  const passwordToggle = isPassword ? (
    <Pressable
      onPress={() => setPasswordVisible((prev) => !prev)}
      accessibilityRole="button"
      accessibilityLabel={passwordVisible ? 'Hide password' : 'Show password'}
      hitSlop={8}
    >
      <Icon name={passwordVisible ? 'eye-off-outline' : 'eye-outline'} variant="muted" size={20} />
    </Pressable>
  ) : null;

  return (
    <View style={styles.wrapper}>
      {label && (
        <Text variant="label" style={styles.label}>
          {label}
        </Text>
      )}
      <View
        style={[
          styles.inputContainer,
          focused && styles.inputContainerFocused,
          error && styles.inputContainerError,
          disabled && styles.inputContainerDisabled,
        ]}
      >
        {leftIcon}
        <TextInput
          style={[styles.input, disabled && styles.inputDisabled, style]}
          placeholderTextColor={theme.colors.text.muted}
          editable={!disabled}
          secureTextEntry={shouldObscure}
          accessibilityLabel={label}
          accessibilityState={{ disabled }}
          onFocus={(e) => {
            setFocused(true);
            rest.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            rest.onBlur?.(e);
          }}
          {...rest}
        />
        {passwordToggle ?? rightIcon}
      </View>
      {error && (
        <Text variant="caption" style={styles.error}>
          {error}
        </Text>
      )}
      {!error && helperText && (
        <Text variant="caption" style={styles.helperText}>
          {helperText}
        </Text>
      )}
    </View>
  );
}

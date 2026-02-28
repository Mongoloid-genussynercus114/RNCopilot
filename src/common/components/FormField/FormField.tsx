import { cloneElement, type ReactElement } from 'react';
import { Controller, type FieldValues } from 'react-hook-form';
import type { FormFieldProps } from './FormField.types';

function resolveLabel(
  label: string | undefined,
  required: boolean | undefined
): string | undefined {
  if (!label) return undefined;
  if (required) return `${label} *`;
  return label;
}

export function FormField<T extends FieldValues = FieldValues>({
  name,
  control,
  label,
  required,
  children,
}: FormFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) =>
        cloneElement(children as ReactElement<Record<string, unknown>>, {
          label: resolveLabel(label, required),
          value,
          onChangeText: onChange,
          onBlur,
          error: error?.message,
        })
      }
    />
  );
}

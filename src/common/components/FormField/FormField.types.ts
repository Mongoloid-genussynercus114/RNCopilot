import type { ReactElement } from 'react';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';

export interface FormFieldProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
  required?: boolean;
  children: ReactElement;
}

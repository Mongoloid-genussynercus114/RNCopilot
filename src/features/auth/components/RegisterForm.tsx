import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Button, FormField, Input } from '@/common/components';
import { registerSchema } from '../schemas/registerSchema';
import type { RegisterFormValues } from '../schemas/registerSchema';

interface RegisterFormProps {
  onSubmit: (values: RegisterFormValues) => void;
  isLoading?: boolean;
}

export function RegisterForm({ onSubmit, isLoading = false }: RegisterFormProps) {
  const { t } = useTranslation();

  const { control, handleSubmit } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  return (
    <View style={styles.container}>
      <FormField name="username" control={control} label={t('auth.register.username')} required>
        <Input
          placeholder={t('auth.register.username')}
          autoCapitalize="none"
          autoComplete="username"
        />
      </FormField>

      <FormField name="email" control={control} label={t('auth.register.email')} required>
        <Input
          placeholder={t('auth.register.email')}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
      </FormField>

      <FormField name="password" control={control} label={t('auth.register.password')} required>
        <Input
          placeholder={t('auth.register.password')}
          secureTextEntry
          autoComplete="new-password"
        />
      </FormField>

      <FormField
        name="confirmPassword"
        control={control}
        label={t('auth.register.confirmPassword')}
        required
      >
        <Input
          placeholder={t('auth.register.confirmPassword')}
          secureTextEntry
          autoComplete="new-password"
        />
      </FormField>

      <Button
        title={t('auth.register.submit')}
        onPress={handleSubmit(onSubmit)}
        loading={isLoading}
        fullWidth
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    gap: theme.metrics.spacingV.p16,
  },
}));

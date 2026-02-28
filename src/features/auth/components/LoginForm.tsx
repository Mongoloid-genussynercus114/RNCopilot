import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Button, FormField, Input } from '@/common/components';
import { loginSchema } from '../schemas/loginSchema';
import type { LoginFormValues } from '../schemas/loginSchema';

interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => void;
  isLoading?: boolean;
}

export function LoginForm({ onSubmit, isLoading = false }: LoginFormProps) {
  const { t } = useTranslation();

  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <View style={styles.container}>
      <FormField name="email" control={control} label={t('auth.login.email')} required>
        <Input
          placeholder={t('auth.login.email')}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
      </FormField>

      <FormField name="password" control={control} label={t('auth.login.password')} required>
        <Input placeholder={t('auth.login.password')} secureTextEntry autoComplete="password" />
      </FormField>

      <Button
        title={t('auth.login.submit')}
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

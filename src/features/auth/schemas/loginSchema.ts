import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'validation.required').email('validation.emailInvalid'),
  password: z.string().min(1, 'validation.required').min(8, 'validation.passwordMin'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

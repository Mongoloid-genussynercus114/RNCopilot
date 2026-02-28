import { z } from 'zod';

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, 'validation.usernameMin')
      .max(20, 'validation.usernameMax')
      .regex(/^\w+$/, 'validation.usernameFormat'),
    email: z.string().min(1, 'validation.required').email('validation.emailInvalid'),
    password: z.string().min(1, 'validation.required').min(8, 'validation.passwordMin'),
    confirmPassword: z.string().min(1, 'validation.required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'validation.passwordMismatch',
    path: ['confirmPassword'],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;

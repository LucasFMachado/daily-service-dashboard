import { z } from 'zod'

export const UserSchemas = {
  create: z
    .object({
      name: z.string().nonempty('Required field'),
      email: z.string().nonempty('Required field').email({
        message: 'Invalid email address',
      }),
      password: z.string().nonempty('Required field').min(6, {
        message: 'Must be more than 6 characters',
      }),
      password_confirm: z.string().nonempty('Required field').min(6, {
        message: 'Must be more than 6 characters',
      }),
    })
    .refine(data => data.password === data.password_confirm, {
      message: `Passwords don't match`,
      path: ['password_confirm'],
    }),
  update: z.object({
    name: z.string().nonempty('Required field'),
    email: z.string().nonempty('Required field').email({
      message: 'Invalid email address',
    }),
  }),
}

import { z } from 'zod'

export const ProtocolSchema = {
  create: z.object({
    situation_id: z.number().positive('Required field'),
    requestor: z.string().nonempty('Required field'),
    phone: z.string().nonempty('Required field'),
    postalCode: z.string().nonempty('Required field'),
    street: z.string().nonempty('Required field'),
    number: z.string().nonempty('Required field'),
    neighborhood: z.string().nonempty('Required field'),
    city: z.string().nonempty('Required field'),
    is_available: z.boolean({
      required_error: 'Available indicator is required',
    }),
    description: z.string(),
  }),
  update: z.object({
    situation_id: z.number().positive('Required field'),
    requestor: z.string().nonempty('Required field'),
    phone: z.string().nonempty('Required field'),
    postalCode: z.string().nonempty('Required field'),
    street: z.string().nonempty('Required field'),
    number: z.string().nonempty('Required field'),
    neighborhood: z.string().nonempty('Required field'),
    city: z.string().nonempty('Required field'),
    is_available: z.boolean({
      required_error: 'Available indicator is required',
    }),
    description: z.string(),
  }),
}

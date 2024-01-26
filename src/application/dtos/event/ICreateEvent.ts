import { z } from 'zod';

const createEventSchema = z.object({
  ride_id: z.string(),
  user_id: z.string(),
  subscription_date: z.string(),
});

export type ICreateEventDTO = z.infer<typeof createEventSchema>;

export { createEventSchema as createEventSchemaZodValidator };

import { z } from 'zod';

const listEventSchema = z.object({
  id: z.string().uuid().optional(),
  ride_id: z.string().uuid().optional(),
  user_id: z.string().uuid().optional(),
  subscription_date: z.string().optional(),
});

export type IListEventDTO = z.infer<typeof listEventSchema>;

export { listEventSchema as listEventSchemaZodValidator };

import { z } from 'zod';

const listRideSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional(),
  start_date: z.coerce.date().optional(),
  ride_participant: z
    .object({
      id: z.string().uuid(),
      subscription_date: z.coerce.date(),
    })
    .array()
    .optional(),
});

export type IListRideDTO = z.infer<typeof listRideSchema>;

export { listRideSchema as listRideSchemaZodValidator };

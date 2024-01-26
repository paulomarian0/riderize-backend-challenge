import { z } from 'zod';

const updateRideSchema = z.object({
  id: z.string(),
  name: z.string(),
  additional_information: z.string().optional(),
  start_place: z.string(),
  participants_limit: z.coerce.number().optional(),
});

export type IUpdateRideDTO = z.infer<typeof updateRideSchema>;

export { updateRideSchema as updateRideSchemaZodValidator };

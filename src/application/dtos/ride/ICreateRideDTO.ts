import { z } from 'zod';

const createRideSchema = z.object({
  name: z.string(),
  start_date: z.coerce.date(),
  start_date_registration: z.coerce.date(),
  end_date_registration: z.coerce.date(),
  additional_information: z.string().optional(),
  start_place: z.string(),
  participants_limit: z.coerce.number().optional(),
});

export type ICreateRideDTO = z.infer<typeof createRideSchema>;

export { createRideSchema as createSchemaZodValidator };

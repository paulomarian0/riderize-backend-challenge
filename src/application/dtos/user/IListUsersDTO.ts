import { z } from 'zod';

const listUsersSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional(),
  email: z.string().email().optional(),
});

export type IListUsersDTO = z.infer<typeof listUsersSchema>;

export { listUsersSchema as listUsersSchemaZodValidator };

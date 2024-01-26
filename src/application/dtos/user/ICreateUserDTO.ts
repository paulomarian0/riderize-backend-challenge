import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export type ICreateUserDTO = z.infer<typeof createUserSchema>;

export { createUserSchema as createUserSchemaZodValidator };

import { z } from 'zod';

const updateUserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
});

export type IUpdateUserDTO = z.infer<typeof updateUserSchema>;

export { updateUserSchema as updateUserSchemaZodValidator };

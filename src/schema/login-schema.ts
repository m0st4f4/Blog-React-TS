import z from "zod";

import { PasswordSchema } from "@/schema/password-schema.ts";
import { UsernameSchema } from "@/schema/username-schema.ts";

export const LoginSchema = z.object({
  username: UsernameSchema,
  password: PasswordSchema,
});

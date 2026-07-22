import { z } from "zod";

import { EmailSchema } from "@/schema/email-schema.ts";
import { PasswordSchema } from "@/schema/password-schema.ts";
import { UsernameSchema } from "@/schema/username-schema.ts";

export const RegisterSchema = z.object({
  username: UsernameSchema,
  password: PasswordSchema,
  email: EmailSchema,
});

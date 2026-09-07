import { z } from "zod";

import { AvatarSchema } from "@/schema/avatar-schema.ts";
import { BioSchema } from "@/schema/bio-schema.ts";
import { EmailSchema } from "@/schema/email-schema.ts";
import { NameSchema } from "@/schema/name-schema.ts";
import { PasswordSchema } from "@/schema/password-schema.ts";
import { UsernameSchema } from "@/schema/username-schema.ts";

export const UserSchema = z.object({
  email: EmailSchema.optional(),
  password: PasswordSchema.optional(),
  name: NameSchema.optional(),
  username: UsernameSchema.optional(),
  avatar: AvatarSchema.optional(),
  bio: BioSchema.optional(),
});
export type UserInfoType = z.infer<typeof UserSchema>;

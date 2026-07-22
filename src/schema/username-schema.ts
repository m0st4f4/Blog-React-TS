import { z } from "zod";







export const UsernameSchema = z
  .string()
  .trim()
  .nonempty("Username can't be blank")
  .regex(/^[a-zA-Z0-9_]{3,20}$/, "Invalid Username");

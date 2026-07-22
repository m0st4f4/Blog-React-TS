import { z } from "zod";







export const PasswordSchema = z
  .string()
  .trim()
  .nonempty("Password can't be blank")
  .min(6,"Password must be at least 6 characters");

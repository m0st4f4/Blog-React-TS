export type UserType = {
  id: string;
  email: string;
  password?: string;
  name: string;
  username: string;
  avatar?: string;
  bio?: string;
  role?: RoleType;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
type RoleType = "admin" | "author" | "subscriber";

export type UserType = {
  id: string;
  email: string;
  password?: string;
  name: string;
  username: string;
  avatar?: string;
  bio?: string;
  title?: string;
  role: RoleType;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
export type RoleType = "admin" | "author" | "subscriber";

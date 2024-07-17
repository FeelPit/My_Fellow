import { User } from "../user/User";

export type Profile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  bio: string | null;
  firstName: string | null;
  lastName: string | null;
  language: string | null;
  sex?: "Option1" | null;
  location: string | null;
  user?: User | null;
};

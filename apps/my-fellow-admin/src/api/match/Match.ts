import { User } from "../user/User";

export type Match = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  matchedUser: string | null;
  user?: User | null;
};

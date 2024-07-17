import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  bio?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  language?: string | null;
  sex?: "Option1" | null;
  location?: string | null;
  user?: UserWhereUniqueInput | null;
};

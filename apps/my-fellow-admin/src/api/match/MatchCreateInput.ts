import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MatchCreateInput = {
  status?: "Option1" | null;
  matchedUser?: string | null;
  user?: UserWhereUniqueInput | null;
};

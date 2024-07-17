import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MatchUpdateInput = {
  status?: "Option1" | null;
  matchedUser?: string | null;
  user?: UserWhereUniqueInput | null;
};

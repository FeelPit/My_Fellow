import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MatchWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  matchedUser?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};

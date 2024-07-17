import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  id?: StringFilter;
  bio?: StringNullableFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  language?: StringNullableFilter;
  sex?: "Option1";
  location?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};

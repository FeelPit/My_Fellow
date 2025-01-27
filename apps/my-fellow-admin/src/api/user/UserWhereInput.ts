import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";
import { MatchListRelationFilter } from "../match/MatchListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  profiles?: ProfileListRelationFilter;
  matches?: MatchListRelationFilter;
};

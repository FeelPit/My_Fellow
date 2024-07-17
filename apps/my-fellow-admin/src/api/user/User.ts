import { JsonValue } from "type-fest";
import { Profile } from "../profile/Profile";
import { Match } from "../match/Match";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  profiles?: Array<Profile>;
  matches?: Array<Match>;
};

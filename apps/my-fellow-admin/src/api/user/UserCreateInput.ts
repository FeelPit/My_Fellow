import { InputJsonValue } from "../../types";
import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";
import { MatchCreateNestedManyWithoutUsersInput } from "./MatchCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  profiles?: ProfileCreateNestedManyWithoutUsersInput;
  matches?: MatchCreateNestedManyWithoutUsersInput;
};

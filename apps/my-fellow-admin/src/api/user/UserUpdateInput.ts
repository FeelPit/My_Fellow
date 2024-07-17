import { InputJsonValue } from "../../types";
import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";
import { MatchUpdateManyWithoutUsersInput } from "./MatchUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  profiles?: ProfileUpdateManyWithoutUsersInput;
  matches?: MatchUpdateManyWithoutUsersInput;
};

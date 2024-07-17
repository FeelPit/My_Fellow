import { SortOrder } from "../../util/SortOrder";

export type MatchOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  matchedUser?: SortOrder;
  userId?: SortOrder;
};

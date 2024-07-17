import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  bio?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  language?: SortOrder;
  sex?: SortOrder;
  location?: SortOrder;
  userId?: SortOrder;
};

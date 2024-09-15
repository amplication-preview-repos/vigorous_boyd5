import { SortOrder } from "../../util/SortOrder";

export type ComponentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  pageId?: SortOrder;
  settings?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};

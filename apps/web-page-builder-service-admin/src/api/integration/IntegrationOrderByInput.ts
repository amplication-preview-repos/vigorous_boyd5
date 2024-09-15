import { SortOrder } from "../../util/SortOrder";

export type IntegrationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  projectId?: SortOrder;
  settings?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};

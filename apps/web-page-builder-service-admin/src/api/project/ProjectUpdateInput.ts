import { IntegrationUpdateManyWithoutProjectsInput } from "./IntegrationUpdateManyWithoutProjectsInput";
import { PageUpdateManyWithoutProjectsInput } from "./PageUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  createdBy?: string | null;
  description?: string | null;
  integrations?: IntegrationUpdateManyWithoutProjectsInput;
  name?: string | null;
  pages?: PageUpdateManyWithoutProjectsInput;
};

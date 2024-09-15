import { IntegrationCreateNestedManyWithoutProjectsInput } from "./IntegrationCreateNestedManyWithoutProjectsInput";
import { PageCreateNestedManyWithoutProjectsInput } from "./PageCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  createdBy?: string | null;
  description?: string | null;
  integrations?: IntegrationCreateNestedManyWithoutProjectsInput;
  name?: string | null;
  pages?: PageCreateNestedManyWithoutProjectsInput;
};

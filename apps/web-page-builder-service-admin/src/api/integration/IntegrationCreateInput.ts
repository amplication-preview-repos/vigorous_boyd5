import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type IntegrationCreateInput = {
  name?: string | null;
  project?: ProjectWhereUniqueInput | null;
  settings?: InputJsonValue;
  typeField?: "Option1" | null;
};

import { ComponentCreateNestedManyWithoutPagesInput } from "./ComponentCreateNestedManyWithoutPagesInput";
import { InputJsonValue } from "../../types";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type PageCreateInput = {
  components?: ComponentCreateNestedManyWithoutPagesInput;
  content?: InputJsonValue;
  project?: ProjectWhereUniqueInput | null;
  title?: string | null;
};

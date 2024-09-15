import { ComponentUpdateManyWithoutPagesInput } from "./ComponentUpdateManyWithoutPagesInput";
import { InputJsonValue } from "../../types";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type PageUpdateInput = {
  components?: ComponentUpdateManyWithoutPagesInput;
  content?: InputJsonValue;
  project?: ProjectWhereUniqueInput | null;
  title?: string | null;
};

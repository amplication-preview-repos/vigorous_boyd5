import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ComponentUpdateInput = {
  page?: PageWhereUniqueInput | null;
  settings?: InputJsonValue;
  typeField?: "Option1" | null;
};

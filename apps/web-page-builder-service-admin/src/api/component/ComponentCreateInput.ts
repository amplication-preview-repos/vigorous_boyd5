import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ComponentCreateInput = {
  page?: PageWhereUniqueInput | null;
  settings?: InputJsonValue;
  typeField?: "Option1" | null;
};

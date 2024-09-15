import { StringFilter } from "../../util/StringFilter";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type ComponentWhereInput = {
  id?: StringFilter;
  page?: PageWhereUniqueInput;
  settings?: JsonFilter;
  typeField?: "Option1";
};

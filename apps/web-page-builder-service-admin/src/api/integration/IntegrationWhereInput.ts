import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type IntegrationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  project?: ProjectWhereUniqueInput;
  settings?: JsonFilter;
  typeField?: "Option1";
};

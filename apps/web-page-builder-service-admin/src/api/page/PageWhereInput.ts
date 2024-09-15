import { ComponentListRelationFilter } from "../component/ComponentListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PageWhereInput = {
  components?: ComponentListRelationFilter;
  content?: JsonFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  title?: StringNullableFilter;
};

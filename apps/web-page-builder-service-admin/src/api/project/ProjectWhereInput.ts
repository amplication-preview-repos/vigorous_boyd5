import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntegrationListRelationFilter } from "../integration/IntegrationListRelationFilter";
import { PageListRelationFilter } from "../page/PageListRelationFilter";

export type ProjectWhereInput = {
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  integrations?: IntegrationListRelationFilter;
  name?: StringNullableFilter;
  pages?: PageListRelationFilter;
};

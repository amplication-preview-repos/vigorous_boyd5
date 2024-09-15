import { Page } from "../page/Page";
import { JsonValue } from "type-fest";

export type Component = {
  createdAt: Date;
  id: string;
  page?: Page | null;
  settings: JsonValue;
  typeField?: "Option1" | null;
  updatedAt: Date;
};

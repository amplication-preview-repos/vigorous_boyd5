import { Project } from "../project/Project";
import { JsonValue } from "type-fest";

export type Integration = {
  createdAt: Date;
  id: string;
  name: string | null;
  project?: Project | null;
  settings: JsonValue;
  typeField?: "Option1" | null;
  updatedAt: Date;
};

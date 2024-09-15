import { Component } from "../component/Component";
import { JsonValue } from "type-fest";
import { Project } from "../project/Project";

export type Page = {
  components?: Array<Component>;
  content: JsonValue;
  createdAt: Date;
  id: string;
  project?: Project | null;
  title: string | null;
  updatedAt: Date;
};

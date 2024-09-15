import { Component as TComponent } from "../api/component/Component";

export const COMPONENT_TITLE_FIELD = "id";

export const ComponentTitle = (record: TComponent): string => {
  return record.id?.toString() || String(record.id);
};

import { Integration as TIntegration } from "../api/integration/Integration";

export const INTEGRATION_TITLE_FIELD = "name";

export const IntegrationTitle = (record: TIntegration): string => {
  return record.name?.toString() || String(record.id);
};

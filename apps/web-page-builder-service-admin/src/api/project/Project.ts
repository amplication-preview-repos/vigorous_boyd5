import { Integration } from "../integration/Integration";
import { Page } from "../page/Page";

export type Project = {
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  integrations?: Array<Integration>;
  name: string | null;
  pages?: Array<Page>;
  updatedAt: Date;
};

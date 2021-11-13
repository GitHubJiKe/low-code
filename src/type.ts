export interface IPlugin {
  type: string;
  name: string;
  data?: Record<string, unknown>;
  props?: Record<string, unknown>;
  api?: string;
  id: string;
}

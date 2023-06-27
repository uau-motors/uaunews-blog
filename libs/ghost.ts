import GhostContentAPI, { SettingsResponse } from "@tryghost/content-api";

import { ghostAPIUrl, ghostAPIKey, processEnv, ProcessEnvProps } from "@libs/processEnv";

export interface GhostSettings extends SettingsResponse {
  processEnv: ProcessEnvProps;
}

const api = new GhostContentAPI({
  url: ghostAPIUrl,
  key: ghostAPIKey,
  version: "v3"
});

export async function getAllSettings(): Promise<GhostSettings> {
  //const cached = getCache<SettingsResponse>('settings')
  //if (cached) return cached
  const settings = await api.settings.browse();
  settings.url = settings?.url?.replace(/\/$/, ``);

  const result = {
    processEnv,
    ...settings
  };
  //setCache('settings', result)
  return result;
}

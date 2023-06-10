import { ToolbarNavI } from "@utility/interfaces";

// siteUrl, platform, ghostAPIUrl, ghostAPIKey must be defined here
export const ghostAPIUrl = process.env.CMS_GHOST_API_URL || "http://localhost:3000";
export const ghostAPIKey = process.env.CMS_GHOST_API_KEY || "387f956eaa95345f7bb484d0b8";

const siteUrl =
  process.env.SITE_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  process.env.URL ||
  "http://localhost:3000";

const platform = (process.env.NETLIFY === "true" && "netlify") || "vercel";

export interface ProcessEnvProps {
  siteUrl: string;
  platform: string;
}

export const processEnv: ProcessEnvProps = {
  siteUrl,
  platform
};

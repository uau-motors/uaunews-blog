import fsPromises from "fs/promises";
import path from "path";
import { GhostSettings } from "./ghost";
import { ghostAPIKey, ghostAPIUrl, processEnv, ProcessEnvProps } from "@libs/processEnv";
import GhostContentAPI from "@tryghost/content-api";

interface Data {
  // Defina a estrutura dos dados do objeto aqui
}

export async function getLocalData(fileName: string): Promise<Data> {
  const filePath = path.join(process.cwd(), `utility/data/${fileName}.json`);
  // Leia o arquivo JSON
  const jsonData = await fsPromises.readFile(filePath, "utf-8");

  const objData = JSON.parse(jsonData) as Data;

  return objData;
}

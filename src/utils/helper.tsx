import { project_places } from "./enum";

export const truncateString = (string: string, num: number) =>
  string?.length > num ? string.slice(0, num) + "..." : string;

export const PROJECT_ID: project_places = project_places.kuwait;

export const truncateString = (string: string, num: number) =>
  string?.length > num ? string.slice(0, num) + "..." : string;

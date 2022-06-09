import { readdir } from "fs/promises";
import { existsSync } from "fs";

export const list = async () => {
  // Write your code here
  if (!existsSync("files")) throw new Error("FS operation failed");
  const files = await readdir("files");
  console.log(files);
};

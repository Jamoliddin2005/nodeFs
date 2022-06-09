import fs from "fs";

export const remove = async () => {
  // Write your code here
  fs.unlink("./files/fileToRemove.txt", function (err) {
    if (err) {
      console.log("FS operation failed");
    }
  });
};

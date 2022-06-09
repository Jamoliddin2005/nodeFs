import fs from "fs";

export const rename = async () => {
  const editFile = "./files/wrongFilename.txt";
  const editedFile = "./files/properFilename.md";

  fs.readFile(editFile, function (err) {
    if (err) {
      console.log("FS operation failed");
    } else {
      fs.rename(editFile, editedFile, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("successfully renamed");
        }
      });
    }
  });
};


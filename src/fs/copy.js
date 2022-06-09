import fs from "fs";

const copy = async () => {
  // Write your code here

  fs.copyFile("files", "copy_files", function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Succes");
    }
  });
};

copy();

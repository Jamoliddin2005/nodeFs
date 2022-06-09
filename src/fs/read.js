import fs from "fs";

export const read = async () => {
  // Write your code here
  fs.readFile("./files/fileToRead.txt", "utf-8", function (err, data) {
    if (err) {
      console.log("err");
    } else {
      console.log(data);
    }
  });
};

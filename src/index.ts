import fs from "fs";
import zlib from "zlib";

export const unzip = (source: string, destination: string, callback?: () => void) => {
  if (!fs.statSync(source).isFile()) {
    return false;
  }
  const src = fs.createReadStream(source);
  const dest = fs.createWriteStream(destination);
  src.pipe(zlib.createGunzip()).pipe(dest);
  dest.on("close", () => {
    if (typeof callback === "function") {
      callback();
    }
  });
};

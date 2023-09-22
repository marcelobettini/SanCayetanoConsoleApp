import * as fs from "node:fs";
import * as rs from "readline-sync";

import { Album } from "./album";
export class FileManager {
  static readAlbums() {
    try {
      const albums = fs.readFileSync("./albums.json", { encoding: "utf-8" });
      console.log("Lectura de datos satisfactoria");
      rs.keyInPause("\n");
      return JSON.parse(albums) as Album[];
    } catch (err) {
      console.log("Unexpected Error:", err);
    }
    //Pause to display messages
    rs.keyInPause("\n");
  }
  static appendAlbum(data: Album[]) {
    try {
      fs.writeFileSync("./albums.json", JSON.stringify(data), {
        encoding: "utf8",
      });
      console.log("Operation completed!\n");
      rs.keyInPause("\n");
    } catch (err) {
      console.log("Unexpected Error:", err);
      rs.keyInPause("\n");
    }
  }
}

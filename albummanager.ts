import { Album } from "./album";
import { FileManager } from "./filemanager";
import * as rs from "readline-sync";

export class AlbumManager {
  albums: Album[];
  public constructor() {
    this.albums = [];
  }
  readAlbums() {
    const readResult = FileManager.readAlbums();
    if (readResult) {
      this.albums = readResult;
      console.log("======== Albums =========\n");
      if (!this.albums.length) {
        console.log("No albums found. \n");
      } else {
        this.albums.forEach((album) => {
          console.log(`
        ID: ${album.id}
        Title: ${album.title}
        Artist: ${album.artist}
        Year: ${album.year}
        Record Label: ${album.recordLabel}
        ---
               
        `);
        });
      }
    }
    rs.keyInPause("\n");
  }
  createAlbum() {
    console.log("Coming soon...");
    rs.keyInPause();
  }
  updateAlbum() {
    console.log("Coming soon...");
  }
  deleteAlbum() {
    console.log("======== Delete Record ========\n");
    const idToDelete = rs.question("Enter the ID of the record to delete: ");
    const recordIndex = this.albums.findIndex(
      (album) => album.id === idToDelete
    );
    if (recordIndex !== -1) {
      const recordToDelete = this.albums[recordIndex];
      const confirmation = rs.keyInYN(
        `Do you want tyo delete ${recordToDelete.title} ? (Y/N)`
      );
      if (confirmation) {
        this.albums.splice(recordIndex, 1);
        FileManager.appendAlbum(this.albums);
      } else {
        console.log("Deletion canceled. Album not removed. \n");
      }
    } else {
      console.log("Album not found.\n");
    }
    rs.keyInPause();
  }
  menu() {
    while (true) {
      console.clear();
      const choice = rs.keyInSelect(this.menuOptions);
      switch (choice) {
        case 0:
          this.readAlbums();
          break;
        case 1:
          this.createAlbum();
          break;
        case 2:
          this.updateAlbum();
          break;
        case 3:
          this.deleteAlbum();
          break;
        default:
          console.log(`
      -------------
      |           |
      | GOOD BYE! | 
      |  SEE YOU  |
      |   LATER   |
      |           |
      ------------- 
      `);
          return;
      }
    }
  }

  menuOptions = ["List Albums", "Create Album", "Update Album", "Delete Album"];
}

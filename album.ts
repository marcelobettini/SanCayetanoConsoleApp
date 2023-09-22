//import * as crypto from "node:crypto";

export class Album {
  id: string;
  title: string;
  artist: string;
  year: number;
  recordLabel: string;
  public constructor(
    title: string,
    artist: string,
    year: number,
    recordLabel: string
  ) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.recordLabel = recordLabel;
  }
}

import {Saison} from "./Saison";

export class Serie {

  private _id: number;
  private _nom: string;
  private _image: string;
  private _saisons: Saison[];

  constructor(id: number, nom: string, image: string, saisons: Saison[]) {
    this._id = id;
    this._nom = nom;
    this._image = image;
    this._saisons = saisons;
  }

  get saisons(): Saison[] {
    return this._saisons;
  }

  set saisons(value: Saison[]) {
    this._saisons = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }
}

import {Type} from './Type';
import {Generation} from "./Generation";

export class Pokemon {
  private _id: number;
  private _nom: string;
  private _type: Type[];
  private _taille: number;
  private _poids: number;
  private _categorie: string;
  private _image: string;
  private _generation: Generation | undefined;

  constructor(
    id: number,
    nom: string,
    type: Type[],
    taille: number,
    poids: number,
    categorie: string) {
    this._id = id;
    this._nom = nom;
    this._type = type;
    this._taille = taille;
    this._poids = poids;
    this._categorie = categorie;
    this._image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get type(): Type[] {
    return this._type;
  }

  set type(value: Type[]) {
    this._type = value;
  }

  get taille(): number {
    return this._taille;
  }

  set taille(value: number) {
    this._taille = value;
  }

  get poids(): number {
    return this._poids;
  }

  set poids(value: number) {
    this._poids = value;
  }

  get categorie(): string {
    return this._categorie;
  }

  set categorie(value: string) {
    this._categorie = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get generation(): Generation {
    return <Generation>this._generation;
  }

  set generation(value: Generation) {
    this._generation = value;
  }
}

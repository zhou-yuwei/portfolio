export class Saison {

  private _id: number;
  private _numero: number;
  private _image: string;

  constructor(id: number, numero: number, image: string) {
    this._id = id;
    this._numero = numero;
    this._image = image;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get numero(): number {
    return this._numero;
  }

  set numero(value: number) {
    this._numero = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }
}

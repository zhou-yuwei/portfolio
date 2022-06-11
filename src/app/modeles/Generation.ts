import {Pokemon} from "./Pokemon";

export class Generation {

  private _id: number;
  private _numero: number;
  private _pokemons: Pokemon[];

  constructor(id: number, numero: number) {
    this._id = id;
    this._numero = numero;
    this._pokemons = [];
  }

  public ajouterPokemon(pokemon: Pokemon) {
    this._pokemons.push(pokemon);
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

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  set pokemons(value: Pokemon[]) {
    this._pokemons = value;
  }
}

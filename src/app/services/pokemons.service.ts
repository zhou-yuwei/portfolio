import { Injectable } from '@angular/core';
import {Pokemon} from "../modeles/Pokemon";
import {Type} from "../modeles/Type";
import {Generation} from "../modeles/Generation";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private pokemons: Pokemon[];

  constructor() {
    this.pokemons = [];
    let pokemon1 = new Pokemon(
      1,
      "Bulbizarre",
      [
        Type.plante, // new Type("plante"),
        Type.poison // new Type("poison");
      ],
      80,
      200,
      "Graine"); // Un nouveau Pokemon
    let generation1 = new Generation(1, 1); // Une nouvelle generation
    generation1.ajouterPokemon(pokemon1); // J'ajoute le pokemon a la generation
    pokemon1.generation = generation1; // J'ajoute la generation au pokemon
    this.pokemons.push(pokemon1); // J'ajoute le pokemon au tableau
  }

  public getPokemons(): Pokemon[] {
    return this.pokemons;
  }
}

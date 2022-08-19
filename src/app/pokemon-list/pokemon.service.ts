import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable()
export class PokemonService {

  constructor() { }

  public getPokemonList(): Pokemon[] {
    // simulate gettting data from backend
    const pokemons: Pokemon[] = [
      {
        name: 'Bulbasaur',
        hp: 45,
        attack: 30,
        defence: 60
      },
      {
        name: 'Ivysaur',
        hp: 55,
        attack: 40,
        defence: 70
      },
      {
        name: 'Venasaur',
        hp: 95,
        attack: 55,
        defence: 90
      },
    ];

    return pokemons;
  }

}
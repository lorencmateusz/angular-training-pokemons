import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  public visibleElements = 0;

  constructor(public pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemons = this.pokemonService.getPokemonList();
  }

  public onToggleVisibility($event: boolean): void {
    if($event === true) {
      this.visibleElements++
    }
    else this.visibleElements--;
  

  }
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Output() onToggleVisibility = new EventEmitter<boolean>();

  public visible: boolean = false;

  constructor() {}

  ngOnInit() {}

  public toggleVisibility(): void {
    this.visible = !this.visible;
    this.onToggleVisibility.emit(this.visible);
  }
}

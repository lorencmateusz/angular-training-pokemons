import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-list/pokemon-details/pokemon-details.component';
import { PokemonService } from './pokemon-list/pokemon.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [PokemonService]
})
export class AppModule {}

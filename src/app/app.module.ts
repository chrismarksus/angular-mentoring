import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PokemonApiService } from './pokemon-api.service';
import { AppComponent } from './app.component';
import { SearchFindPokemonComponent } from './search-find-pokemon/search-find-pokemon.component';
import { DisplayFavoritePokemonComponent } from './display-favorite-pokemon/display-favorite-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFindPokemonComponent,
    DisplayFavoritePokemonComponent,
    SearchPokemonComponent
  ],
  imports: [
		BrowserModule,
		FormsModule
  ],
  providers: [PokemonApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

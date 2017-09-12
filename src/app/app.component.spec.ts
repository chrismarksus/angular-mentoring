import { TestBed, async } from '@angular/core/testing';

import { PokemonApiService } from './pokemon-api.service';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { SearchFindPokemonComponent } from './search-find-pokemon/search-find-pokemon.component';
import { DisplayFavoritePokemonComponent } from './display-favorite-pokemon/display-favorite-pokemon.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
			providers: [PokemonApiService],
      declarations: [
				AppComponent,
				SearchPokemonComponent,
				SearchFindPokemonComponent,
				DisplayFavoritePokemonComponent
      ],
      imports : [ FormsModule ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'pokedex'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Pokedex');
  }));

});

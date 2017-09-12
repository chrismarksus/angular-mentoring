import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonApiService } from '../pokemon-api.service';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';
import { SearchFindPokemonComponent } from './search-find-pokemon.component';

import { FormsModule } from '@angular/forms';

describe('SearchFindPokemonComponent', () => {
  let component: SearchFindPokemonComponent;
  let fixture: ComponentFixture<SearchFindPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			providers: [PokemonApiService],
			declarations: [
				SearchPokemonComponent,
				SearchFindPokemonComponent
			],
      imports : [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFindPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be setup with data', () => {
    expect(component.data.length).toBe(20);
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPokemonComponent } from './search-pokemon.component';

import { FormsModule } from '@angular/forms';

describe('SearchPokemonComponent', () => {
  let component: SearchPokemonComponent;
  let fixture: ComponentFixture<SearchPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPokemonComponent ],
      imports : [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be empty, favorite attribute', () => {
    expect(component.favorite).toBe('');
  });

  it('should set the favorite attribute to spearow', () => {
    component.changePokemon('spearow');
    expect(component.favorite).toBe('spearow');
  });
});

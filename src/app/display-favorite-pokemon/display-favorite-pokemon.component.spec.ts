import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFavoritePokemonComponent } from './display-favorite-pokemon.component';

describe('DisplayFavoritePokemonComponent', () => {
  let component: DisplayFavoritePokemonComponent;
  let fixture: ComponentFixture<DisplayFavoritePokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFavoritePokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFavoritePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

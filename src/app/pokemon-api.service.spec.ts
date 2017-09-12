import { TestBed, inject } from '@angular/core/testing';

import { PokemonApiService } from './pokemon-api.service';

describe('PokemonApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonApiService]
    });
  });

  it('should return the total pokemon', inject([PokemonApiService], (service: PokemonApiService) => {
    expect(service.getTotal()).toBe(811);
  }));

	it('should return the list of pokemon', inject([PokemonApiService], (service: PokemonApiService) => {
    expect(service.getList().length).toBe(20);
  }));

	it('should return the url for the next page of the list', inject([PokemonApiService], (service: PokemonApiService) => {
		expect(service.getNext()).toBe('https://pokeapi.co/api/v2/pokemon/?offset=20');
  }));

  it('should return the url for the previous page of the list', inject([PokemonApiService], (service: PokemonApiService) => {
		expect(service.getPrev()).toBe(null);
  }));
});

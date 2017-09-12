import { Injectable } from '@angular/core';

// mock data for the list
import listMockData from './pokemon-api-service-data';

@Injectable()
export class PokemonApiService {
  list = listMockData;

	constructor() { }

	getList(){
		return this.list.results;
	}

	getNext(){
		return this.list.next
	}

	getPrev(){
		return this.list.previous;
  }

	getTotal(){
		return this.list.count;
	}

}

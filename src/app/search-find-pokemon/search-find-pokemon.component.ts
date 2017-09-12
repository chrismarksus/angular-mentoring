import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'search-find-pokemon',
  templateUrl: './search-find-pokemon.component.html',
  styleUrls: ['./search-find-pokemon.component.scss']
})
export class SearchFindPokemonComponent implements OnInit {

	data:any = {};

  constructor(private api:PokemonApiService) { }

  ngOnInit() {
  	this.data = this.api.getList();
  }

}

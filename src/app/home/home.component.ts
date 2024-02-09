import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(private pokemonService:PokemonService){}

 ngOnInit(): void {
  this.pokemonService.getpokemons().subscribe({
    next: (pokemons) => {
       
    },
    error: (error) => {
      console.log(error);
    }
  });
 }

}
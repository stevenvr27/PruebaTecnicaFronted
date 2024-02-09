import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../service/pokemon.service';

@Component({
  selector: 'app-pokemon-picture',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-picture.component.html',
  styleUrl: './pokemon-picture.component.scss'
})
export class PokemonPictureComponent implements OnInit {
  title = 'pokedex';
  pokemons: any[] = [];
pokemon: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getpokemons().subscribe({
      next: (response: any) => {
        // Filtrar los Pokémon para eliminar duplicados
        const uniquePokemons = response.pokemon.filter((pokemon: any, index: any, self: any[]) =>
          index === self.findIndex((p: any) => (
            p.id === pokemon.id && p.name === pokemon.name
          ))
        );
        this.pokemons = uniquePokemons;
       
      },
      error: (error: any) => {
        console.error('Error fetching pokemons:', error);
      }
    });
  }
}
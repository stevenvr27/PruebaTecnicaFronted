import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../service/pokemon.service';
 

@Component({
  selector: 'app-target',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './target.component.html',
  styleUrl: './target.component.scss'
  
})
export class TargetComponent implements OnInit {
  title = 'pokedex';
  pokemons: any[] = [];

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
        console.log(this.pokemons);
      },
      error: (error: any) => {
        console.error('Error fetching pokemons:', error);
      }
    });
  }
}
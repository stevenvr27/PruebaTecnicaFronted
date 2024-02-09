import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonPictureComponent } from './pokemon-picture/pokemon-picture.component';
import { TargetComponent } from './target/target.component';
import { PokemonService } from '../app/service/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],  
  imports: [
    RouterOutlet,
    PokemonPictureComponent,
    TargetComponent,
    HttpClientModule,
    CommonModule,
  ],
})
export class AppComponent implements OnInit {
  // Ensure you implement OnInit
  title = 'pokedex';
  pokemons: any[] = [];
  currentPokemon!: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getpokemons().subscribe({
      next: (pokemon: any) => {
        console.log('Pokemons:', pokemon);
        this.pokemons = pokemon.pokemon;
        this.currentPokemon = this.pokemons[0];
      },
      error: (error) => {
        console.error('Error fetching pokemons:', error);
      },
    });
  }

  onPokemonClicked(pokemon: any) {
    this.currentPokemon = pokemon;
  }
}
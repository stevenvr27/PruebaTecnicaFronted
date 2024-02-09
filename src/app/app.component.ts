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
  styleUrls: ['./app.component.scss'], // Note: Corrected styleUrl to styleUrls
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

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getpokemons().subscribe({
      next: (pokemon: any) => {
         
      },
      error: (error) => {
        console.error('Error fetching pokemons:', error);
      },
    });
  }
}
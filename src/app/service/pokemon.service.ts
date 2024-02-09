import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getpokemons() {
    return this.httpClient.get<any[]>('http://localhost:3000/api/pokemon');
  }
}
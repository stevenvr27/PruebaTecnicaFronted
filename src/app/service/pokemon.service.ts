import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private hhtpClient:HttpClient) { }


getpokemons(){
  return this.hhtpClient.get('localhost:3000/api/pokemon');
}
}
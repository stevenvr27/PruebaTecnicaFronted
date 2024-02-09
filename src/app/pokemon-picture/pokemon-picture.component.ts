import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-picture',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-picture.component.html',
  styleUrl: './pokemon-picture.component.scss',
})
export class PokemonPictureComponent implements OnInit {
  title = 'pokedex';
  @Input() pokemon: any;

  constructor() {}

  ngOnInit() {}
}
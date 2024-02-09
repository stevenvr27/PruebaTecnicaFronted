import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-target',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './target.component.html',
  styleUrl: './target.component.scss',
})
export class TargetComponent implements OnInit {
  title = 'pokedex';
  @Input() pokemon: any;
  @Output() pokemonClicked = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  getPokemonClicked(pokemon: any) {
    this.pokemonClicked.emit(pokemon);
  }
}
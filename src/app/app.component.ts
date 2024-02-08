import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonPictureComponent } from "./pokemon-picture/pokemon-picture.component";
import { TargetComponent } from "./target/target.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PokemonPictureComponent, TargetComponent]
})
export class AppComponent {
  title = 'pokedex';
}

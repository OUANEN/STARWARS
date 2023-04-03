import { Character } from './model/character.model';
import { CharacterService } from './character.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacters().subscribe((response:any) => {
      console.log(response)
      this.characters = response['results'];
    });
  }
}

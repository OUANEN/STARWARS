import { Character } from './model/character.model';
import { CharacterService } from './character.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  characters: Character[] = [];
  characterSubscription: Subscription = new Subscription;
  constructor(private characterService: CharacterService) { }

  ngOnInit() {
   this.characterSubscription = this.characterService.getCharacters().subscribe((response:any) => {
      console.log(response)
      this.characters = response['results'];
    });
  }

  ngOnDestroy() {
    this.characterSubscription.unsubscribe()
}
}

import { Component } from '@angular/core';
import { LinesComponent } from '../../assets/lines/lines.component';
import { CharacterComponent } from '../../assets/character/character.component';
import { MainComponent } from './main/main.component';
import { HeartComponent } from '../../assets/heart/heart.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [LinesComponent, CharacterComponent,MainComponent,HeartComponent],
  templateUrl: './signup.component.html',
  styles: ''
})
export class SignupComponent {

}

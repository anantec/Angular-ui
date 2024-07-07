import { Component } from '@angular/core';
import { ComsubComponent } from './comsub/comsub.component';
import { BoatComponent } from '../../../assets/boat/boat.component';

@Component({
  selector: 'app-subs2',
  standalone: true,
  imports: [ComsubComponent,BoatComponent],
  templateUrl: './subs2.component.html',
  styles: ''
})
export class Subs2Component {

}

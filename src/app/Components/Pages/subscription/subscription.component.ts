import { Component } from '@angular/core';
import { BoatComponent } from '../../../assets/boat/boat.component';
import { Step4Component } from '../../../assets/progres-bar/step-4/step-4.component';
import { MainSubComponent } from './main-sub/main-sub.component';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [
    BoatComponent,
    Step4Component,
    MainSubComponent
  ],
  templateUrl: './subscription.component.html',
  styles: ''
})
export class SubscriptionComponent {

}

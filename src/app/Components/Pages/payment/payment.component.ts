import { Component } from '@angular/core';
import { Step3Component } from '../../../assets/progres-bar/step-3/step-3.component';
import { BoatComponent } from '../../../assets/boat/boat.component';
import { SubMainComponent } from './sub-main/sub-main.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [Step3Component, BoatComponent, SubMainComponent],
  templateUrl: './payment.component.html',
  styles: ''
})
export class PaymentComponent {

}

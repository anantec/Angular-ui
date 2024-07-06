import { Component } from '@angular/core';
import { Step3Component } from '../../../assets/progres-bar/step-3/step-3.component';
import { BoatComponent } from '../../../assets/boat/boat.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [Step3Component, BoatComponent ],
  templateUrl: './payment.component.html',
  styles: ''
})
export class PaymentComponent {

}

import { Component } from '@angular/core';
import { CrossComponent } from '../../../../../assets/icon/cross/cross.component';
import { TickComponent } from '../../../../../assets/icon/tick/tick.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CrossComponent,TickComponent],
  templateUrl: './pricing.component.html',
  styles: ''
})
export class PricingComponent {

}

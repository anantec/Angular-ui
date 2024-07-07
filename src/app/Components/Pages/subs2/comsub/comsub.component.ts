import { Component } from '@angular/core';
import { PriceComponent } from './price/price.component';
import { Step4Component } from '../../../../assets/progres-bar/step-4/step-4.component';

@Component({
  selector: 'app-comsub',
  standalone: true,
  imports: [PriceComponent,Step4Component],
  templateUrl: './comsub.component.html',
  styles: ''
})
export class ComsubComponent {

}

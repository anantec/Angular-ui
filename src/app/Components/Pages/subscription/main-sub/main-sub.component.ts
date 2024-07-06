import { Component } from '@angular/core';
import { Step4Component } from '../../../../assets/progres-bar/step-4/step-4.component';
import { PricingComponent } from './pricing/pricing.component';

@Component({
  selector: 'app-main-sub',
  standalone: true,
  imports: [Step4Component,PricingComponent],
  templateUrl: './main-sub.component.html',
  styles: ''
})
export class MainSubComponent {

}

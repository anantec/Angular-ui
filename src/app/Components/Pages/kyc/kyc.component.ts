import { Component } from '@angular/core';
import { Step2Component } from '../../../assets/progres-bar/step-2/step-2.component';
import { BoatComponent } from '../../../assets/boat/boat.component';
import { IconComponent } from '../../../assets/icon/icon.component';
import { KycMainComponent } from './kyc-main/kyc-main.component';

@Component({
  selector: 'app-kyc',
  standalone: true,
  imports: [Step2Component,BoatComponent, KycMainComponent],
  templateUrl: './kyc.component.html',
  styles: ''
})
export class KycComponent {

}

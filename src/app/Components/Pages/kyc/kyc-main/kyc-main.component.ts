import { Component } from '@angular/core';
import { IconComponent } from '../../../../assets/icon/icon.component';
import { Step2Component } from '../../../../assets/progres-bar/step-2/step-2.component';
import { PlusComponent } from '../../../../assets/icon/plus/plus.component';

@Component({
  selector: 'app-kyc-main',
  standalone: true,
  imports: [IconComponent,Step2Component,PlusComponent],
  templateUrl: './kyc-main.component.html',
  styles: ''
})
export class KycMainComponent {

}

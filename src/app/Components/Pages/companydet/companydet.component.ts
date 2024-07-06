import { Component } from '@angular/core';
import { BoatComponent } from '../../../assets/boat/boat.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-companydet',
  standalone: true,
  imports: [BoatComponent,FormComponent],
  templateUrl: './companydet.component.html',
  styles: ''
})
export class CompanydetComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from './Components/signup/signup.component';
import { CompanydetComponent } from './Components/Pages/companydet/companydet.component';
import { KycComponent } from './Components/Pages/kyc/kyc.component';
import { PaymentComponent } from './Components/Pages/payment/payment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SignupComponent,CompanydetComponent,KycComponent,PaymentComponent],
  templateUrl: './app.component.html',
  styles:  []
})
export class AppComponent {
  title = 'project';
}

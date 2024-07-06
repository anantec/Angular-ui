import { Routes } from '@angular/router';
import { CompanydetComponent } from './Components/Pages/companydet/companydet.component';
import { SignupComponent } from './Components/signup/signup.component';

export const routes: Routes = [
    {
        path:"",
        component: SignupComponent
    },
    {
        path:"company-details",
        component:CompanydetComponent
    }
];

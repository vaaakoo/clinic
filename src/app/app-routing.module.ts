import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { CategoryComponent } from './category/category.component';
import { RegistrationComponent } from './registration/registration.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';



const routes: Routes = [
    {path: 'admin-page/category', component: CategoryComponent},
  { path: 'client-reg', component: ClientRegistrationComponent },
  { path: 'admin-page/registration', component: RegistrationComponent },
  { path: 'booking', component: BookingPageComponent },
  {path: 'doctor-page', component: DoctorPageComponent},
  {path: 'admin-page', component: AdminPageComponent},
  {path: 'client-page', component: ClientPageComponent},
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { CrisisComponent } from './component/crisis/crisis.component';
import { DonationComponent } from './component/donation/donation.component';
import { HomeComponent } from './component/home/home.component';
import { InventoryComponent } from './component/inventory/inventory.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { VolunteerComponent } from './component/volunteer/volunteer.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'crisis', component: CrisisComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'account', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

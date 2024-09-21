import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from 'src/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { CrisisComponent } from './component/crisis/crisis.component';
import { DonationComponent } from './component/donation/donation.component';
import { InventoryComponent } from './component/inventory/inventory.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AdminComponent } from './component/admin/admin.component';
import { VolunteerComponent } from './component/volunteer/volunteer.component';
import { HomeComponent } from './component/home/home.component';
@NgModule({
  declarations: [AppComponent, MenubarComponent, RegisterComponent, LoginComponent, LogoutComponent, CrisisComponent, DonationComponent, InventoryComponent, ProfileComponent, AdminComponent, VolunteerComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

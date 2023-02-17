import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderTwoComponent } from './components/header-two/header-two.component';
import { HeaderThreeComponent } from './components/header-three/header-three.component';

import { FormsModule } from '@angular/forms';
import { ApplicationsComponent } from './body-routes/applications/applications.component';
import { AppliedJobComponent } from './body-routes/applied-job/applied-job.component';
import { MyOfferComponent } from './body-routes/my-offer/my-offer.component';
import { JobLoggedComponent } from './body-routes/job-logged/job-logged.component';
import { JobHistoryComponent } from './body-routes/job-history/job-history.component';
import { MyProfileComponent } from './body-routes/my-profile/my-profile.component';
import { PersonalInfoModalComponent } from './modals/personal-info-modal/personal-info-modal.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SignUpPageComponent } from './Pages/sign-up-page/sign-up-page.component';
import { ForgotPasswordPageComponent } from './Pages/forgot-password-page/forgot-password-page.component';
import { ChangePasswordPageComponent } from './Pages/change-password-page/change-password-page.component';
import { JobPageComponent } from './Pages/job-page/job-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    ApplicationsComponent,
    AppliedJobComponent,
    MyOfferComponent,
    JobLoggedComponent,
    JobHistoryComponent,
    MyProfileComponent,
    PersonalInfoModalComponent,
    LoginPageComponent,
    SignUpPageComponent,
    ForgotPasswordPageComponent,
    ChangePasswordPageComponent,
    JobPageComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

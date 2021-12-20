import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './admin/users/users.component';
import { ProfileComponent } from './user/profile/profile.component';
import { CommonModule}  from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AccordionModule } from 'primeng/accordion';

import { MatAutocompleteModule}from '@angular/material/autocomplete';
import { MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeuserComponent } from './user/homeuser/homeuser.component';
import { HomeadminComponent } from './admin/homeadmin/homeadmin.component';
import { UserComponent } from './admin/user/user.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccueilComponent } from './user/accueil/accueil.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import {ObserversModule} from '@angular/cdk/observers';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
const config={
  apiKey: "AIzaSyD_pitruTt6FQ1DD9hkZYp6G8IYJ7jRcd8",
  authDomain: "cheaklacombat.firebaseapp.com",
  projectId: "cheaklacombat",
  storageBucket: "cheaklacombat.appspot.com",
  messagingSenderId: "773930095992",
  appId: "1:773930095992:web:bfc06ee1a3a51a6fa2e48d",
  measurementId: "G-HE853S7S1V"
};
@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
    CdkTableModule,

    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [
  ]
})
export class MaterialModule {}
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProfileComponent,
    HomeuserComponent,
    HomeadminComponent,
    UserComponent,
    FooterComponent,
    NavbarComponent,
    AccueilComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule ,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    AccordionModule,
    MaterialModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

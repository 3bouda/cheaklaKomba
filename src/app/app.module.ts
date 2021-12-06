import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from "src/environments/environment";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './admin/users/users.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeuserComponent } from './user/homeuser/homeuser.component';
import { HomeadminComponent } from './admin/homeadmin/homeadmin.component';
import { UserComponent } from './admin/user/user.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccueilComponent } from './user/accueil/accueil.component';
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
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule ,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

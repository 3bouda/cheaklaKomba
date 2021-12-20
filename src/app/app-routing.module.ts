import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeadminComponent } from './admin/homeadmin/homeadmin.component';
import { UsersComponent } from './admin/users/users.component';
import { HomeuserComponent } from './user/homeuser/homeuser.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './admin/user/user.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './user/accueil/accueil.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './user/navbar/navbar.component';


const routes: Routes = [
  {path:"homeuser", component:HomeuserComponent,children:[
    {path:"accueil", component:AccueilComponent},
    {path:"profile",component: ProfileComponent},
    {path:"**", component:AccueilComponent}
  ]},
  {path:"navbar",component: NavbarComponent},
  {path:"homeadmin",component: HomeadminComponent},
  {path:"users",component: UsersComponent},
  {path:"user/:id",component: UserComponent},
  {path:"footer",component: FooterComponent},
  {path:"signup", component:SignupComponent},
  {path:"**", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

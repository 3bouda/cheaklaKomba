import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeadminComponent } from './admin/homeadmin/homeadmin.component';
import { UsersComponent } from './admin/users/users.component';
import { HomeuserComponent } from './user/homeuser/homeuser.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './admin/user/user.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './user/accueil/accueil.component';


const routes: Routes = [
  {path:"homeadmin",component: HomeadminComponent},
  {path:"users",component: UsersComponent},
  {path:"user/:id",component: UserComponent},
  {path:"profile",component: ProfileComponent},
  {path:"footer",component: FooterComponent},
  {path:"homeuser", component:HomeuserComponent},
  {path:"accueil", component:AccueilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

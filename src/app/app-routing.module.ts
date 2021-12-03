import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeadminComponent } from './admin/homeadmin/homeadmin.component';
import { UsersComponent } from './admin/users/users.component';
import { HomeuserComponent } from './user/homeuser/homeuser.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './admin/user/user.component';


const routes: Routes = [
  {path:"adminHome",component: HomeadminComponent},
  {path:"users",component: UsersComponent},
  {path:"user/:id",component: UserComponent},
  {path:"home",component: HomeuserComponent},
  {path:"profile",component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

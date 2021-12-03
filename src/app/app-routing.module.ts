import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeadminComponent } from './admin/homeadmin/homeadmin.component';
import { UsersComponent } from './admin/users/users.component';
import { HomeuserComponent } from './user/homeuser/homeuser.component';
import { ProfileComponent } from './user/profile/profile.component';


const routes: Routes = [




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

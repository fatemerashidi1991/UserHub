import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './services/authGuard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'user-management', component: UserManagementComponent, canActivate: [AuthGuard]},
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
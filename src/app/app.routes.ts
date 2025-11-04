import { Routes } from '@angular/router';
import { Home } from './home/home';
import { User } from './user/user';
import { Admin } from './admin/admin';
import { Login } from './login/login';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    {path:'',component:User},
    {path:'login',component:Login},
    {path:'admin',canActivate:[authGuard],component:Admin}
];

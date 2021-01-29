import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {LoginRegisterComponent} from "./components/login-register/login-register.component";
import {ProductComponent} from "./components/product/product.component";
import {RegisterLoginComponent} from "./components/register-login/register-login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {SearchComponent} from "./components/search/search.component";

const APP_ROUTES: Routes =
  [
    { path: 'home', component: HomeComponent },
    { path: 'login-register', component: LoginRegisterComponent },
    { path: 'register-login', component: RegisterLoginComponent },
    { path: 'mermelada/:id', component: ProductComponent },
    { path: 'profile', component: ProfileComponent},
    { path: 'buscar/:texto', component: SearchComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }      //Cuando no encuentre la ruta, nos lleva a donde le indiquemos aquí
  ];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });


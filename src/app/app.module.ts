import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTING} from "./app.routes";
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { ProductComponent } from './components/product/product.component';
import { ProductTarjetaComponent } from './components/product-tarjeta/product-tarjeta.component';
import {MermeladaService} from "../services/mermelada.service";
import {registerLocaleData} from "@angular/common";
import localEs from "@angular/common/locales/es";
import { RegisterLoginComponent } from './components/register-login/register-login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
registerLocaleData(localEs);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginRegisterComponent,
    ProductComponent,
    ProductTarjetaComponent,
    RegisterLoginComponent,
    ProfileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    APP_ROUTING
  ],
  providers: [MermeladaService,
  {
    provide: LOCALE_ID,
    useValue: 'es'
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

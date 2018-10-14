import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabComponent } from './tab/tab/tab.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserinfolistComponent } from './userinfolist/userinfolist.component';
import {DataTableModule} from "angular-6-datatable";
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { AlertComponent } from './directive/alert.directive';
import { BnNgIdleService } from 'bn-ng-idle';




@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LoginComponent,
    TabComponent,
    UserinfoComponent,
    UserinfolistComponent,
    FooterComponent,
    LogoutComponent,
    AlertComponent
    
  ],
  imports: [
    BrowserModule,  
    HttpClientModule,
    ReactiveFormsModule,
    DataTableModule,
    routing,
    NgbModule.forRoot(),
    
  ],
  providers: [BnNgIdleService,
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

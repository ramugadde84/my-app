import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { CanActivateAthGuardService } from './can-activate-ath-guard.service';
import { TabComponent } from './tab/tab/tab.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserinfolistComponent } from './userinfolist/userinfolist.component';
import { LogoutComponent } from './logout/logout.component';

const appRoutes: Routes = [
    {path: '', component: TabComponent, canActivate: [CanActivateAthGuardService]},
    {path: 'login', component: LoginComponent },
    {path: 'tabdata', component: TabComponent,canActivate: [CanActivateAthGuardService] },
    {path: 'usercreation',component: UserinfoComponent,canActivate: [CanActivateAthGuardService]},
    {path: 'userlist',component: UserinfolistComponent,canActivate: [CanActivateAthGuardService]},
    {path: 'logout',component: LogoutComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);

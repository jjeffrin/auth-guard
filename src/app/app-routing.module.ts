import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'user-auth',
        component: UserAuthComponent,        
    },
    {
        path: 'user-profile',
        component: UserProfileComponent,     
        canActivate: [AuthGuardService]   
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
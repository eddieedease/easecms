import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  { path: 'site', component: SiteComponent },
  { path: 'admin', component: AdminComponent },
  { path: '',
  redirectTo: 'admin',
  pathMatch: 'full'
},
  { path: '**', component: SiteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

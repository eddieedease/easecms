import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { AdminComponent } from './admin/admin.component';
import { Site2Component } from './site2/site2.component';
import { Site3Component } from './site3/site3.component';
import { Site4Component } from './site4/site4.component';

const appRoutes: Routes = [
  { path: 'site', component: SiteComponent },
  { path: 'site2', component: Site2Component },
  { path: 'site3', component: Site3Component },
  { path: 'site4', component: Site4Component },
  { path: 'admin', component: AdminComponent },
  { path: '',
  redirectTo: 'site',
  pathMatch: 'full'
},
  { path: '**', component: SiteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    AdminComponent,
    Site2Component,
    Site3Component,
    Site4Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

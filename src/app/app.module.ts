import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { AdminComponent } from './admin/admin.component';
import { Site2Component } from './site2/site2.component';

const appRoutes: Routes = [
  { path: 'site', component: SiteComponent },
  { path: 'site2', component: Site2Component },
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
    Site2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
  // {path: '', component: AppComponent}
  { path: '', redirectTo: '/login' , pathMatch: 'full'},
  { path: 'projects', redirectTo: '/projects' , pathMatch: 'full'},
  { path: 'tasklist', redirectTo: '/tasklists' , pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
    exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}

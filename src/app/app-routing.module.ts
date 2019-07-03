import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticFlagComponent } from './static-flag/static-flag.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'static-flag'
  },
  {
    path: 'static-flag',
    component: StaticFlagComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

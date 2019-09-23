import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'static-flag'
  },
  {
    path: 'static-flag',
    loadChildren: () => import('./static-flag/static-flag.module').then(m => m.StaticFlagModule)
  },
  {
    path: 'input-binding-complex-type',
    loadChildren: () => import('./input-binding-complex-type/input-binding-complex-type.module').then(m => m.InputBindingComplexTypeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { InputBindingComplexTypeComponent } from './input-binding-complex-type.component';

export let routes: Routes = [
  {
    path: '',
    component: InputBindingComplexTypeComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

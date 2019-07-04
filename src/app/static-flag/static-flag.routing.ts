import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { StaticFlagComponent } from './static-flag.component';

export let staticFlagRoutes: Routes = [
    {
      path: '',
      component: StaticFlagComponent
    }
  ]

export const routing: ModuleWithProviders = RouterModule.forChild(staticFlagRoutes);

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBindingComplexTypeComponent } from './input-binding-complex-type.component';
import { routing } from './input-binding-complex-type.routing';
import { InputBindingParentComponent } from './input-binding-parent/input-binding-parent.component';
import { InputBindingChildComponent } from './input-binding-parent/input-binding-child/input-binding-child.component';



@NgModule({
  declarations: [InputBindingComplexTypeComponent, InputBindingParentComponent, InputBindingChildComponent],
  imports: [
    CommonModule,
    routing
  ]
})
export class InputBindingComplexTypeModule { }

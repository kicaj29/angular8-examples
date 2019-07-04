import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponent } from './dog/dog.component';
import { SmallDogComponent } from './dog/small-dog/small-dog.component';
import { StaticFlagComponent } from './static-flag.component';
import { routing } from './static-flag.routing';



@NgModule({
  declarations: [
    StaticFlagComponent,
    DogComponent,
    SmallDogComponent
  ],
  imports: [
    routing,
    CommonModule
  ]
})
export class StaticFlagModule { }

import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { SmallDogComponent } from './small-dog/small-dog.component';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit, AfterViewInit {

  // static flag works in the scope of particular component,
  // it means that if parent component is rendered conditionally (ngIf on app-dog)
  // it is ok to use static: true inside of this component (app-dog)
  @ViewChild(SmallDogComponent, {read: SmallDogComponent, static: true}) SmallDog: SmallDogComponent;

  constructor() { }

  ngOnInit() {
    if (this.SmallDog) {
      console.log('SMALL-DOG available in ngOnInit');
    } else {
      console.log('SMALL-DOG NOT available in ngOnInit');
    }
  }

  ngAfterViewInit() {
    if (this.SmallDog) {
      console.log('SMALL-DOG available in ngAfterViewInit');
    } else {
      console.log('SMALL-DOG NOT available in ngAfterViewInit');
    }
  }

}

import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { DogComponent } from './dog/dog.component';

@Component({
  selector: 'app-static-flag',
  templateUrl: './static-flag.component.html',
  styleUrls: ['./static-flag.component.scss']
})
export class StaticFlagComponent implements OnInit, AfterViewInit {

  public IsDogVisible: boolean;

  // use static false when rendering referenced component depends data binding (for example ngIf)
  // "In Angular version 9 and later, it will be safe to remove any {static: false} flags and we will do this cleanup for you in a schematic."

  // static: true - use when the component is always rendered, then 'dog' is available in ngOnInit, ngAfterViewInit
  // static: false - use when the component rendering depends on some conditions (like ngIf), then 'dog' is available in ngAfterViewInit
  // NOTE: if we use static: true and the component rendering depends on some conditions then 'dog' is not available at all!!!
  @ViewChild(DogComponent, {read: DogComponent, static: false}) dog: DogComponent;


  constructor(private ref: ChangeDetectorRef) {
    this.IsDogVisible = true;
  }

  ngOnInit() {
    if (this.dog) {
      console.log('DOG available in ngOnInit');
    } else {
      console.log('DOG NOT available in ngOnInit');
    }
  }

  ngAfterViewInit() {
    if (this.dog) {
      console.log('DOG available in ngAfterViewInit');
    } else {
      console.log('DOG NOT available in ngAfterViewInit');
    }
  }

  checkDog() {
    if (this.dog) {
      console.log('DOG available');
    } else {
      console.log('DOG NOT available');
    }
  }

  showDog() {
    this.IsDogVisible = true;

    // called to force refresh ViewChild/dog
    this.ref.detectChanges();

    this.checkDog();
  }

  hideDog() {
    this.IsDogVisible = false;

    // called to force refresh ViewChild/dog
    this.ref.detectChanges();

    this.checkDog();
  }
}

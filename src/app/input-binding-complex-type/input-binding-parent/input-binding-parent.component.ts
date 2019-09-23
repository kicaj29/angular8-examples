import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { InputBindingChildComponent } from './input-binding-child/input-binding-child.component';
import { ItemSelectorSelectedRowsModel } from './input-binding-child/item-selector-selected-rows-model';
import { ViewModel } from './view-model';

@Component({
  selector: 'app-input-binding-parent',
  templateUrl: './input-binding-parent.component.html',
  styleUrls: ['./input-binding-parent.component.scss']
})
export class InputBindingParentComponent implements OnInit {

  viewModel: ViewModel;

  @ViewChild('app-input-binding-child', {static: true}) childComponent: InputBindingChildComponent;


  constructor(private _cd: ChangeDetectorRef) {
    this.viewModel = new ViewModel();
    this.viewModel.selectedItems = [];
    this.viewModel.selectedItems.push(new ItemSelectorSelectedRowsModel(1, '1', []));

  }

  ngOnInit() {
  }

  onItemSelectorConfirm(data: ItemSelectorSelectedRowsModel[]): void {
    console.log('onItemSelectorConfirm - executed');
    console.log(data[0].tabName);
    data[0].selectedRowsIds.forEach((id: string) => {
      console.log(id);
      this.viewModel.selectedItems[0].selectedRowsIds.push(id);
    });
  }

  addByParent() {
    console.log('addByParent');

    // if we add an element to existing array @input binding is not triggered and the new element is not rendered
    this.viewModel.selectedItems[0].selectedRowsIds.push(Date.now().toString());
    // this._cd.detectChanges();


    // we have to create new instance of selectedItems to trigger @input binding (setter)
    //this.viewModel.selectedItems = [];
    //this.viewModel.selectedItems.push(new ItemSelectorSelectedRowsModel(1, '1', []));
    //this.viewModel.selectedItems[0].selectedRowsIds.push(Date.now().toString());
  }
}

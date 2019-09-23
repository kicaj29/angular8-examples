import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { ItemSelectorSelectedRowsModel } from './item-selector-selected-rows-model';

@Component({
  selector: 'app-input-binding-child',
  templateUrl: './input-binding-child.component.html',
  styleUrls: ['./input-binding-child.component.scss']
})
export class InputBindingChildComponent implements OnInit {

  public selectedIds: string[];
  private _selectedItems: ItemSelectorSelectedRowsModel[];

  constructor() {
  }

  @Output() selectionConfirmed: EventEmitter<ItemSelectorSelectedRowsModel[]> = new EventEmitter();

  get itemSelectorSelectedRows(): ItemSelectorSelectedRowsModel[] {
    return this._selectedItems;
  }

  @Input()
  set itemSelectorSelectedRows(selectedRows: ItemSelectorSelectedRowsModel[]) {
    console.log('itemSelectorSelectedRows - set executed');
    selectedRows.forEach((item: ItemSelectorSelectedRowsModel) => {
      console.log(item.tabName);
      item.selectedRowsIds.forEach((id: string) => {
        console.log(id);
      });
    });

    this._selectedItems = selectedRows;
    this.selectedIds = [...this._selectedItems[0].selectedRowsIds];
  }

  ngOnInit() {

  }

  remove(index: number) {
    this.selectedIds.splice(index, 1);
  }

  addByChild() {
    this.selectedIds.push(Date.now().toString());
  }

  closeDialog() {
      let tmp: ItemSelectorSelectedRowsModel[] = [];
      tmp.push(new ItemSelectorSelectedRowsModel(1, '1', []));
      tmp[0].selectedRowsIds = [...this.selectedIds];

      this.selectionConfirmed.emit(tmp);
    }
}

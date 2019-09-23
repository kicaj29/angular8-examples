export class ItemSelectorSelectedRowsModel {
  tabIndex: number;
  tabName?: string;
  selectedRowsIds: string[];


  constructor(tabIndex: number, tabName: string, selectedRowsIds: string[]) {
    this.tabIndex = tabIndex;
    this.tabName = tabName;
    this.selectedRowsIds = selectedRowsIds;
  }
}

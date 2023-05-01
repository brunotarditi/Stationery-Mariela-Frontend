import { Component, OnInit, Input, ChangeDetectorRef  } from '@angular/core';
import { DynamicTable } from '../../interfaces/dynamicTable';
import { HeaderTable } from '../../interfaces/headerTable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataTable: DynamicTable;
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dataTable = { headers: [], data: []};
  }

  renderTab(headers: HeaderTable[], data: any[]){
    this.dataTable = { headers: headers, data: data }
    this.changeDetector.detectChanges();
  }

}

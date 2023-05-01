import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { DynamicTable } from 'src/app/shared/interfaces/dynamicTable';
import { HeaderTable } from 'src/app/shared/interfaces/headerTable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  @ViewChild('tabProducts') tabProducts: TableComponent;
  products: Product[];
  dataTable: DynamicTable;

  constructor() { }

  ngAfterViewInit(): void {
    const headers = ['id', 'name', 'description', 'price'].map((x, i) => ({key: x, index: i} as HeaderTable));
    this.products = [
      { id: 1, name: 'Lapiz', description: 'Lapiz Faber Castell de 10 miligramos', price: 120 },
      { id: 2, name: 'Regla', description: 'Regla Maped de 20 centímetros', price: 200 },
      { id: 3, name: 'Tijera', description: 'Tijera Maped con agarre de plástico', price: 240 }
    ];
    // this.dataTable = {headers: headers, data: this.products}
    this.tabProducts.renderTab(headers, this.products)
  }

  ngOnInit(): void { }

}

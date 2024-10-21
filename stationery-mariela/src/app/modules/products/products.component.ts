import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
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
  products: Array<any>;
  dataTable: DynamicTable;
  headers: HeaderTable[];
  page: number = 0;
  size: number = 5;
  order: string = 'id';
  asc: boolean = true;
  isFirst: boolean = false;
  isLast: boolean = false;
  totalPages: Array<number>;
  constructor(private productService: ProductsService) { }

  ngAfterViewInit(): void {
    this.headers = [
      { key: 'id', name: 'ID' },
      { key: 'name', name: 'Nombre' },
      { key: 'description', name: 'Descripción' },
      { key: 'price', name: 'Precio' },
    ];
    this.getProductsByPages();
  }

  ngOnInit(): void {
  }

  getProductsByPages() {
    this.productService.getProductsByPages(this.page, this.size, this.order, this.asc).subscribe({
      next: (data) => {
        this.products = data.content;
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPages = new Array(data.totalPages);
        this.tabProducts.renderTab(this.headers, this.products);
        console.log(data)
      },
      error: (err) => { console.error(err) }
    });
  }

}

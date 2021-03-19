import { Component } from '@angular/core';
import { Product } from '../product.model';

/**
 * @ProductRow: A component for the view of single Product
 */
@Component({
  selector: 'product-row',
  inputs: ['product'],
  host: {'class': 'item'},
  templateUrl: './product-row.component.html',
})
export class ProductRowComponent {
  product: Product;
}
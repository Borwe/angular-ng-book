import { Component, OnInit } from '@angular/core';

/**
 * @PriceDisplay: A component to show the price of a 
 * Product
 */
@Component({
  selector: 'price-display',
  inputs: ['price'],
  template: `
  <div class="price-display">\${{ price }}</div>
  `
})
export class PriceDisplayComponent {
  price: number;
}
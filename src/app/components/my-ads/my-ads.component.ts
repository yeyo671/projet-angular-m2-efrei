import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';


interface ProductWithUserEmail extends Product {
  userEmail: string;
}

@Component({
  selector: 'app-my-ads',
  standalone: true,
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss'],
  imports: [CommonModule, HeaderComponent]
})
export class MyAdsComponent implements OnInit {
  products: ProductWithUserEmail[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  async ngOnInit() {
    const userId = this.productService.getCurrentUserId();
    this.products = await this.productService.getProductsByUserId(userId);
  }

  async deleteProduct(productId: string) {
    try {
      await this.productService.deleteProduct(productId);
      this.products = this.products.filter(product => product.id !== productId);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }
}
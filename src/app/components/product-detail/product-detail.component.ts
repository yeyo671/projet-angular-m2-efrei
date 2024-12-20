import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductWithUserEmail } from '../../models/productWithUserEmail.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  imports: [CommonModule]
})
export class ProductDetailComponent implements OnInit {

  product: ProductWithUserEmail | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {}

  async ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.product = await this.productService.getProductById(productId);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  async deleteProduct() {
    if (this.product) {
      try {
        await this.productService.deleteProduct(this.product.id);
        this.router.navigate(['/']);
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  }

  isCurrentUserProduct(): boolean {
    if (this.product) {
      const currentUserId = this.productService.getCurrentUserId();
      return this.product.userId === currentUserId;
    }
    return false;
  }
}
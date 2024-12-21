import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductWithUserEmail } from '../../models/productWithUserEmail.model';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  imports: [CommonModule, TruncatePipe, HeaderComponent]
})
export class ProductDetailComponent implements OnInit {
  product: ProductWithUserEmail | undefined;
  otherProducts: ProductWithUserEmail[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  async ngOnInit() {
    await this.loadProductDetails();
  }

  async loadProductDetails() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.product = await this.productService.getProductById(productId);
      if (this.product) {
        this.otherProducts = await this.productService.getProductsByUserId(this.product.userId);
        this.otherProducts = this.otherProducts.filter(p => p.id !== this.product!.id);
      }
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

  async viewProduct(productId: string) {
    await this.router.navigate(['/product', productId]);
    await this.loadProductDetails();
  }
}
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { TruncatePipe } from '../../pipes/truncate.pipe';

interface ProductWithUserEmail extends Product {
  userEmail: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, HeaderComponent, TruncatePipe]
})
export class HomeComponent implements OnInit {
  products: ProductWithUserEmail[] = [];
  filteredProducts: ProductWithUserEmail[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  async ngOnInit() {
    this.products = await this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  viewProduct(productId: string) {
    this.router.navigate(['/product', productId]);
  }

  applyFilter(filter: { name: string; price: number | null; description: string; userEmail: string }) {
    this.filteredProducts = this.products.filter(product => {
      const matchesName = product.title.toLowerCase().includes(filter.name.toLowerCase());
      const matchesDescription = product.description.toLowerCase().includes(filter.description.toLowerCase());
      const matchesUserEmail = product.userEmail.toLowerCase().includes(filter.userEmail.toLowerCase());
      const matchesPrice = filter.price === null || product.price <= filter.price;
      return (matchesName || matchesDescription || matchesUserEmail) && matchesPrice;
    });
  }

  filterByEmail(email: string) {
    this.filteredProducts = this.products.filter(product => product.userEmail.toLowerCase() === email.toLowerCase());
  }
}
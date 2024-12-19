import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { HighlightDirective } from '../../directives/highlight.directive';
import { containsWordValidator } from '../../validators/custom-validators';

@Component({
  selector: 'app-add-product',
  standalone: true,
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent, HighlightDirective]
})
export class AddProductComponent {
  addProductForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
    this.addProductForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, containsWordValidator('état')]],
      price: ['', [Validators.required, Validators.min(0)]],
      imageUrl: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.addProductForm.valid) {
      const newProduct = this.addProductForm.value;
      try {
        await this.productService.addProduct(newProduct);
        this.router.navigate(['/']);
      } catch (error) {
        this.errorMessage = error as string;
      }
    }
  }
}
import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userEmail: string | null = '';
  filterName: string = '';
  filterPrice: number | null = null;

  @Output() filterChanged = new EventEmitter<{ name: string; price: number | null }>();

  constructor(@Inject(AuthService) private authService: AuthService, private router: Router) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userEmail = user?.email || '';
  }

  logout() {
    this.authService.signOut();
  }

  navigateToAddProduct() {
    this.router.navigate(['/add-product']);
  }

  applyFilter() {
    this.filterChanged.emit({ name: this.filterName, price: this.filterPrice });
  }
}
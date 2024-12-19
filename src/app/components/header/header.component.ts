import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
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

  @Output() filterChanged = new EventEmitter<{ name: string; price: number | null; description: string; userEmail: string }>();

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

  navigateToMyAds() {
    this.router.navigate(['/my-ads']);
  }

  applyFilter() {
    this.filterChanged.emit({ name: this.filterName, price: this.filterPrice, description: this.filterName, userEmail: this.filterName });
  }

  isHomePage(): boolean {
    return this.router.url === '/';
  }
}
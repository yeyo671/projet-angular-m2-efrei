import { Product } from './product.model';

export interface ProductWithUserEmail extends Product {
  userEmail: string;
}
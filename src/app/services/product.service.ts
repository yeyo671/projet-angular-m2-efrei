import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, doc, getDoc, DocumentData } from '@angular/fire/firestore';
import { Product } from '../models/product.model';
import { AuthService } from './auth.service';

interface ProductWithUserEmail extends Product {
  userEmail: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsCollection;

  constructor(private firestore: Firestore, private authService: AuthService) {
    this.productsCollection = collection(this.firestore, 'products');
  }

  async getProducts(): Promise<ProductWithUserEmail[]> {
    const productsSnapshot = await getDocs(this.productsCollection);
    const products = await Promise.all(productsSnapshot.docs.map(async docSnapshot => {
      const product = { id: docSnapshot.id, ...docSnapshot.data() } as Product;
      const userDocRef = doc(this.firestore, `users/${product.userId}`);
      const userDoc = await getDoc(userDocRef);
      const userEmail = userDoc.exists() ? (userDoc.data() as DocumentData)['email'] : 'Unknown';
      return { ...product, userEmail } as ProductWithUserEmail;
    }));
    return products;
  }

  async getProductById(id: string): Promise<ProductWithUserEmail | undefined> {
    const productDoc = doc(this.firestore, `products/${id}`);
    const productSnapshot = await getDoc(productDoc);
    if (productSnapshot.exists()) {
      const product = { id: productSnapshot.id, ...productSnapshot.data() } as Product;
      const userDocRef = doc(this.firestore, `users/${product.userId}`);
      const userDoc = await getDoc(userDocRef);
      const userEmail = userDoc.exists() ? (userDoc.data() as DocumentData)['email'] : 'Unknown';
      return { ...product, userEmail } as ProductWithUserEmail;
    }
    return undefined;
  }

  async addProduct(product: Product): Promise<void> {
    const userId = this.authService.getCurrentUserId();
    await addDoc(this.productsCollection, { ...product, userId });
  }
}
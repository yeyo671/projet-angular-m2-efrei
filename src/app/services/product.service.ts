import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, doc, getDoc } from '@angular/fire/firestore';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsCollection;

  constructor(private firestore: Firestore) {
    this.productsCollection = collection(this.firestore, 'products');
  }

  async getProducts(): Promise<Product[]> {
    const productsSnapshot = await getDocs(this.productsCollection);
    return productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
  }

  async getProductById(id: string): Promise<Product | undefined> {
    const productDoc = doc(this.firestore, `products/${id}`);
    const productSnapshot = await getDoc(productDoc);
    return productSnapshot.exists() ? ({ id: productSnapshot.id, ...productSnapshot.data() } as Product) : undefined;
  }

  async addProduct(product: Product): Promise<void> {
    await addDoc(this.productsCollection, product);
  }
}
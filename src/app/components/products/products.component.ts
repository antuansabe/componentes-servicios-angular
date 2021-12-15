import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService }  from '../../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product [] = [];
  total = 0 ;

  products:  Product[] = [
    {
      id: '1',
      name: 'El mejor juguete',
      price: 565,
      image: './assets/toy.jpg',
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/bike.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: '../assets/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: '../assets/books.jpg'
    }
  ];

  constructor(
    private  storeService: StoreService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
   }

  ngOnInit(): void {

  }

  onAddShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}

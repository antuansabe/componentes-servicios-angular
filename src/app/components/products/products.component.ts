import { Component, Input } from '@angular/core';
import { Product, CreateProductDTO, UpdateProductDTO } from '../../models/product.model';
import { StoreService }  from '../../services/store.service';
import { ProductsService  } from '../../services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart: Product [] = [];
  total = 0 ;
  @Input() products:  Product[] = [ ];
  showProductDetail = false;
  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: ''
  };

  constructor(
    private  storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }



  onAddShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail( id: string ){
    this.productsService.getProduct(id)
      .subscribe( data =>{
        this.toggleProductDetail();
        this.productChosen = data;
      } )
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nuevo producto',
      description: 'bla bla bla',
      images: [`https://placeimg.com/640/480/any?random=${Math.random()}`],
      price: 1000,
      categoryId: 2,
    }
    this.productsService.create(product)
      .subscribe( data =>  {
        this.products.unshift(data);
    });
  }


  updateProduct() {
    const changes: UpdateProductDTO = {
      title: 'nuevo title',

    }
    const id = this.productChosen.id;
    this.productsService.update(id, changes)
      .subscribe(data => {
        const productIndex = this.products.findIndex(item => item.id === this.productChosen.id)
        this.products[productIndex] = data;
      });
  }

  deleteProduct(){
      const id = this.productChosen.id;
      this.productsService.delete(id)
        .subscribe( () => {
          const productIndex = this.products.findIndex( item => item.id === this.productChosen.id );
          this.products.splice( productIndex, 1  );
          this.showProductDetail = false;
        });
    }


}

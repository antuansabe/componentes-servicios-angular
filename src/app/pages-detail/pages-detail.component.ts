import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-pages-detail',
  templateUrl: './pages-detail.component.html',
  styleUrls: ['./pages-detail.component.scss']
})
export class PagesDetailComponent implements OnInit {

  productId: string | null = null;
  product:  Product | null = null;


  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap( params => {
        this.productId = params.get('id');
        if (this.productId){
          return this.productsService.getProduct( this.productId);
        }
        return [null];
      })
    )
    .subscribe( (data) => {
      this.product = data;
        });
      }

      goToBack() {
        this.location.back();
      }

  }



import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { User } from 'src/app/models/user.model';
import { Category } from 'src/app/models/product.model';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  categories: Category[] =  [];

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }


  getAllCategories() {
    this.categoriesService.getAll()
    .subscribe( data => {
      this.categories = data;
    })
  }

}

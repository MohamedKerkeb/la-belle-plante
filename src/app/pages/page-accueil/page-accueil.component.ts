import { Component, OnInit } from '@angular/core';
import { CallApiService } from 'src/app/services/call-api.service';

import * as _ from 'underscore';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss'],
})
export class PageAccueilComponent implements OnInit {
  public categories: string[];
  public list: object[];

  constructor(private callApiService: CallApiService) {
    this.categories = [];
    this.list = [];
  }

  ngOnInit(): void {
    this.getProducts();
    // this.categories =  _.pluck(this.listProduct, 'product_breadcrumb_label')
    // this.categories = [...new Set(this.categories)]
    // this.categories = _.filter(this.categories, (item, index) => this.categories.indexOf(item) === index)
    // this.categories = _.uniq(this.categories);

    //  console.log(this.list)
    // const listAllCategories = this.listData.map(product => product.product_breadcrumb_label);
    // const listUniqCategories = _.uniq(listAllCategories)
    // console.log(listUniqCategories)
  }

  getProducts() {
    this.callApiService.getData().subscribe((product: any) => {
      this.list = product;
      this.list.length = 20 // permet de limite le nombre d'appel à l'api 
      // console.log(this.list);
      this.getCategories();
    });
  }

  getCategories() {
    this.categories = _.pluck(this.list, 'product_breadcrumb_label');
    this.categories = _.uniq(this.categories);
    //_.unique(product.map((el: any)  => el['product_breadcrumb_label']))
  }

  onEventLike() {
    console.log("parent page get event")
    this.callApiService.planLiked$.next('')
  }
}

import { Component, OnInit } from '@angular/core';

import * as _ from 'underscore';
import {list_products} from '../../data'

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  categories: string[] = [];
  listData = list_products

  constructor() { }

  ngOnInit(): void {
  
  this.categories =  _.pluck(list_products, 'product_breadcrumb_label')
  // this.categories = [...new Set(this.categories)]
  // this.categories = _.filter(this.categories, (item, index) => this.categories.indexOf(item) === index)
  this.categories = _.uniq(this.categories);

  //console.log(this.categories)

  const listAllCategories = this.listData.map(product => product.product_breadcrumb_label);
  const listUniqCategories = _.uniq(listAllCategories)
  console.log(listUniqCategories)
  
  }

}

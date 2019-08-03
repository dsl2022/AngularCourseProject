import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe','this is a test desc','https://assets.bonappetit.com/photos/5b5f825e88c6c02d0713fc76/16:9/w_1600%2Cc_limit/basically-summer-salmon-nicoise-1.jpg')
  ];
  
  constructor() { 
    
  }
  
  ngOnInit() {
  }
  
}

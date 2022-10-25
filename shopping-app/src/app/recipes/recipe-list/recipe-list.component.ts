import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Simple Test', 'https://www.seriouseats.com/thmb/K40kegtcsC9WbzOCvogu-sjU79k=/1500x1125/filters:fill(auto,1)/butter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredients.model";

export class ShoppingListService{
  IngredientChanged = new Subject<Ingredient[]>();

  ingredients: Ingredient[]=[
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredient(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.IngredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient);
    this.IngredientChanged.next(this.ingredients.slice());
  }
}

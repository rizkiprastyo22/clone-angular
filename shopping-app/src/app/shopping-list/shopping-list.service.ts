import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

export class ShoppingListService{
  IngredientChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[]=[
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredient(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.IngredientChanged.emit(this.ingredients.slice());
  }
}

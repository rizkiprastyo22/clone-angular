import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  // buat variabel recipeSelected dari model
  recipeSelected = new EventEmitter<Recipe>();

  // buat instance
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is a Simple Test',
      'https://www.seriouseats.com/thmb/K40kegtcsC9WbzOCvogu-sjU79k=/1500x1125/filters:fill(auto,1)/butter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Tomatoes', 1),
      ]),
    new Recipe('Another Recipe',
      'This is another recipe',
      'https://www.gourmetcaterers.com/wp-content/uploads/2020/02/021420-351-scaled.jpg?x46180',
      [
        new Ingredient('Tomatoes', 1),
        new Ingredient('Meat', 1),
      ])
  ];

  constructor(private shoppingListService: ShoppingListService){}

  // ambil data instance
  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  // menambahkan data ke shopping List
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}

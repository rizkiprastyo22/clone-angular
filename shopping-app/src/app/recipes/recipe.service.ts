import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

  // buat variabel recipeSelected dari model
  recipeSelected = new EventEmitter<Recipe>();

  // buat instance
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Simple Test', 'https://www.seriouseats.com/thmb/K40kegtcsC9WbzOCvogu-sjU79k=/1500x1125/filters:fill(auto,1)/butter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg'),
    new Recipe('Another Recipe', 'This is another recipe', 'https://www.gourmetcaterers.com/wp-content/uploads/2020/02/021420-351-scaled.jpg?x46180')
  ];

  // ambil data instance
  getRecipes(){
    return this.recipes.slice();
  }
}

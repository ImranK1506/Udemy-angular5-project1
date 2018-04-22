import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Recipe One', 'Random description', 'https://loremflickr.com/320/240'),
        new Recipe('Recipe Two', 'Random description', 'https://loremflickr.com/320/240')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}

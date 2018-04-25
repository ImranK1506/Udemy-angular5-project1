import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe
        (
            'Kitten Cafe Recipe',
            'Amazing Recipe',
            'https://loremflickr.com/320/240',
            [
                new Ingredient('Sugar', 1),
                new Ingredient('Spice', 1),
                new Ingredient('Something Nice', 1)
            ]
        ),
        new Recipe
        (
            'Kitten Cafe Recipe Two',
            'Amazing Recipe 2',
            'https://loremflickr.com/320/240',
            [
                new Ingredient('Sugar', 1),
                new Ingredient('Spice', 1),
                new Ingredient('Something Fluffy', 1)
            ]
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}

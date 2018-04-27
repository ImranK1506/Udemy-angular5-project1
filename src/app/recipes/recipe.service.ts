import { EventEmitter, Injectable } from '@angular/core';

import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
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

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    ingredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.ingredientsAdded(ingredients);
    }
}

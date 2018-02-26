import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() afterRecipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Recipe One', 'Random description', 'https://loremflickr.com/320/240'),
    new Recipe('Recipe Two', 'Random description', 'https://loremflickr.com/320/240')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.afterRecipeSelected.emit(recipe);
  }
}

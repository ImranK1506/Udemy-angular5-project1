import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Random name', 'Random description', 'https://loremflickr.com/320/240'),
    new Recipe('Random name', 'Random description', 'https://loremflickr.com/320/240')
  ];

  constructor() { }

  ngOnInit() {
  }

}

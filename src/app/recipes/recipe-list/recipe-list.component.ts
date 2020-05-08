import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ('Test recipe', 'Delicios test', 'https://dish.co.nz/media/VERSIONS/images/ceviche-citrus_article--740x1005.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

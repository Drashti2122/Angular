import { Recipe } from './../recipe.model';
import { map, switchMap } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as RecipesActions from '../store/recipe.action';
import * as ShoopingListActions from '../../shopping-list/store/shooping-list.action';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    // const id=this.route.snapshot.params['id']
    this.route.params.pipe(map(params => {
      return +params['id']
    }), switchMap(id => {
      this.id = id;
      return this.store.select('recipes')
    }),
      map((recipesState: any) => {
        return recipesState.recipe.
          find((recipe: any, index: number) => {
            return index == this.id;
          })
      })).subscribe((recipe: any) => {
        this.recipe = recipe;
      });

  }

  onAddToShoppingList() {
    // this.recipeService.addIngredientToShoppingList(this.recipe.ingredients)
    this.store.dispatch(
      new ShoopingListActions.AddIngredients(this.recipe.ingredients)
    );
  }

  onEditRecipe() {
    // this.router.navigate(['edit'], { relativeTo: this.route })
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route })
  }

  onDeleteRecipe() {
    // this.recipeService.deleteRecipe(this.id)
    this.store.dispatch(new RecipesActions.DeleteRecipe(this.id))
    this.router.navigate(['/recipes'])
  }
}

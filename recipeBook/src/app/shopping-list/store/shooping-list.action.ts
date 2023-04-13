import { Ingredient } from './../../shared/ingedient.model';
import { Action } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list.reducer';

export const ADD_INGREDIENT = '[Shopping List] Add Ingredient';
export const ADD_INGREDIENTS = '[Shooping List] Add Ingredient';
export const UPDATE_INGREDIENTS = '[Shooping List] Update Ingredient';
export const DELETE_INGREDIENTS = '[Shooping List] Delete Ingredient';
export const START_EDIT = '[Shooping List] Start Edit';
export const STOP_EDIT = '[Shooping List] Stop Edit';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  // payload:Ingredient;
  constructor(public payload: Ingredient) { }
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) { }
}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENTS;

  constructor(public payload: Ingredient) { }
}

export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENTS;
}

export class StartEdit implements Action {
  readonly type = START_EDIT;

  constructor(public payload: number) { }
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;

  constructor() { }
}

export type ShoppingListActions =
  AddIngredient |
  AddIngredients |
  UpdateIngredient |
  DeleteIngredient |
  StartEdit |
  StopEdit;

import { Recipe } from "../recipe.model";
import * as RecipesActions from "./recipe.action";

export interface State {
  recipes: Recipe[]
}

const intialState: State = {
  recipes: []
};

export function recipeReducer(
  state = intialState,
  action: RecipesActions.RecipesActions): any {
  // return state;
  switch (action.type) {
    case RecipesActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      }

    case RecipesActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      }

    case RecipesActions.UPDATE_RECIPE:
      const updatedRecipe = {
        ...state.recipes[action.payload.index],
        ...action.payload.newRecipe,
      };

      const updatedRecipes = [...state.recipes];
      updatedRecipes[action.payload.index] = updatedRecipe;

      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      }

    case RecipesActions.DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe, index) => {
          return index !== action.payload
        })
      };

    default:
      return state;
  }
}

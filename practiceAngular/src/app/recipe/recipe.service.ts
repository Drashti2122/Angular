import { Subject } from "rxjs";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  recipes: Recipe[] = [
    new Recipe(
      'Manchurian',
      'this is very testy',
      'https://media.istockphoto.com/id/1334115358/photo/cabbage-manchurian.jpg?s=612x612&w=0&k=20&c=lZvW1lWr03mQszDbx4v59IAnxWacQ_Ti275hjj18hcE='
    ),
    new Recipe(
      'Pizza',
      'It is very delicious',
      'https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  deleteRecipe(index: number) {
    console.log("hii" + index)
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}

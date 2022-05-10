/*
Defining the structure of your data
a question mark (?) just before the property's type
annotation when declaring the interface.
*/

export interface Recipe {

  id: number;
  title: string;
  ingredients: string;
  tags?: string;
  imageUrl: string;
  cookingTime?: number;
  prepTime?: number;
  yield: number;
  steps?: string;
  rating: number;
}


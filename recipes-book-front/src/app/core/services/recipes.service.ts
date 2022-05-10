/*
Step 1- Creating an Angular service
RecipesService that will be responsible for managing all the operations around the recipes. This service will encapsulate the Create, Read, Update, and Delete (CRUD) operations and make them available to the various UI components. In this chapter, we will only implement the read operation.

And why do we do this? Well, we do it to increase modularity in the first place and to ensure the reusability of the service over the other components.
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe.model';
import { environment } from 'src/environments/environment';
const BASE_PATH = environment.basePath
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

/**
 * Step 2
 * Retrieving the data through a method.
 * We will inject the HttpClient service and
 * define a method to retrieve the data.
 */
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${BASE_PATH}/recipes`);
  }


  recipes$ = this.http.get<Recipe[]>(
    `${BASE_PATH}/recipes`);

/**
 * We have a getRecipes() method that
 * gets the list of recipes over HTTP and returns
 * a strongly typed HTTP response: Observable<Recipe[]>.
 * This Observable notifier represents the data
 * stream that will be created when you issue the
 * HTTP GET request. As a best practice,
 * we externalized BASE_PATH in the environment.ts
 * file because, in many cases, it depends on the
 * environment.
 *
 * 
 */

}

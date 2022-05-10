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
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${BASE_PATH}/recipes`);
  }
  recipes$ = this.http.get<Recipe[]>(
    `${BASE_PATH}/recipes`);
  constructor(private http: HttpClient) { }
}

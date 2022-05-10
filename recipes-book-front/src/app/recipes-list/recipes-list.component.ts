import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Recipe } from '../core/model/recipe.model';
import { RecipesService } from '../core/services/recipes.service';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListComponent implements OnInit {
  recipes!: Recipe[];
  recipes$ = this.service.recipes$;
  constructor(private service: RecipesService) { }
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.service.getRecipes().pipe(
      takeUntil(this.destroy$)).
      subscribe(result => {
        this.recipes = result;
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

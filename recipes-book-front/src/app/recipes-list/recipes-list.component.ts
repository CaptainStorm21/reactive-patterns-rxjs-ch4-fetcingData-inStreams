import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
//step 2 - import the model
import { Recipe } from '../core/model/recipe.model';
//step 3 - import the service
import { RecipesService } from '../core/services/recipes.service';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

// export class RecipesListComponent implements OnInit {
export class RecipesListComponent{
  //intial state with an empty array with a Recipe interface
  recipes!: Recipe[];

  /**
   * Defining the stream in your component -  recipes$
   * declaring a variable holding the stream returned from our service.
   */

  /**
 * variablerecipes$ - refers to declaring a new variable that is for this component
 * however this.service.recipes$ refers to the service recipe$
 */

  recipes$ = this.service.recipes$;
  //step 3- we will inject the service in the
  //RecipesListComponent component,
  //which is responsible for displaying the
  //list of recipes, and call the getRecipes()
  //method in ngOnInit()(when the component
  //has been initialized).We are making a read
  //operation against the API server.
  constructor(private service: RecipesService) { }
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    /**
     * In order to get the data emitted,
     * we need to subscribe to the returned
     * Observable notifier from the getRecipes()
     * method. Then, we bind the data to a local
     * property created in our component; in our case, this is the recipes array.
     */
    //   this.service.getRecipes().pipe(
    //     takeUntil(this.destroy$)).
    //     subscribe(result => {
    //       this.recipes = result;
    //     });
    // }
    // ngOnDestroy(): void {
    //   // step 7 - next() the complete() -
    //   //step 8 - complete() will end destroy the component
    //   this.destroy$.next();
    //   this.destroy$.complete();
    // }
  }

  /**
   * The $ sign is an informal convention that is used to indicate
   * that the variable is an Observable notifier.
   */
  /**
   * step 5 -Managing unsubscriptions
   * 1 - we import Subject and takeUntil from rxjs
   * 2 - we need to create observable variable - destroy$ = new Subject<void>()
   * 3 - we bring in ngOnDestroy() - cycle
   * 4 - we add a pipe to this.service.getRecipes()
   * 5 - we add takeUntil() and include this.destoy$ as a parameter
   * 6 - subscribe ( result => {
   *     this recipe = result})
   * 7 -
   */

  /**
   * The takeUntil() operator takes values from the source observable (the first timeline) until the Observable notifier, which is given as input (the second timeline), emits a value. In the previous marble diagram, the source observable emitted the values of a, b, c, and d. So, takeUntil() will emit them, respectively. After that, the Observable notifier emits z. So, takeUntil() will stop emitting values and will complete.
   * The takeUntil operator will help us keep the subscription alive for a period that we define. We want it to be alive until the component has been destroyed, so we will create an RxJS subject that will emit a value when the component has been destroyed. Then, we will pass this subject to takeUntil as input:
  */
}

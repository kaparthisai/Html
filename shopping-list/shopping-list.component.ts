import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model.';
import { Subscription, Observable } from 'rxjs';
import { LoggingService } from '../logging-service';
import * as ShoppinglistActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit,OnDestroy{
  ingredients :Observable<{ingredients:Ingredient[]}> ;
 private igChangeSub:Subscription;
  
  constructor(
    private loggingService:LoggingService,
    private store :Store<fromApp.AppState>
    ) {}

  ngOnInit(){ 
   this.ingredients = this.store.select('shoppingList');
  //   this.ingredients = this.slService.getIngredients();
  // this.igChangeSub= this.slService.ingredientsChanged 
  //  .subscribe(
  //    (ingredients:Ingredient[])=>{
  //      this.ingredients = ingredients;
  //   
//  }
//    );
   this.loggingService.printLog('Hello from ShoppingListComponent ngOninit ');
  
  }
  onEditItem(index:number){
    // this.slService.startedEditing.next(index)
    this.store.dispatch(new ShoppinglistActions.StartEdit(index));
  }

  ngOnDestroy(){
    // this.igChangeSub.unsubscribe();
  }
 
}

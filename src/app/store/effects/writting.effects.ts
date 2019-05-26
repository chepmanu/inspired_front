import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { of } from 'rxjs'
import { tap,switchMap, catchError, map,} from 'rxjs/operators';

import { writtingTypes, getWrittings, getWrittingsSuccess, getWrittingsFail, postWritting, postWrittingSuccess, postWrittingFailed } from '../actions/writting.actions';
import { WrittingService } from '../../ core/services/writting.service';


@Injectable()

export class WrittingEffects {

    constructor(private actions: Actions,
                private writtingService: WrittingService,
                private router: Router
                ){}

@Effect()
Getwrittings: Observable<any> = this.actions.pipe(
    ofType(writtingTypes.FETCH),
    switchMap((() => 
        this.writtingService.get().pipe(
            map(writtings => new getWrittingsSuccess(writtings)),
            catchError(error => of(new getWrittingsFail(error)))
        )))
)

@Effect()
Postwritting: Observable<any> = this.actions.pipe(
  ofType(writtingTypes.POST),
    map((action: postWritting) => action.payload),
    switchMap(payload => {
      return this.writtingService.postWritting(payload.body, payload.title, payload.description, payload.url)
      .pipe(
        map((user) => {
          return new postWrittingSuccess(user);
        }),
        catchError((error) => {
            const error2 = error.error
          return of({
            type: writtingTypes.POST_FAILED,
            payload: { error2 }
          });
        }));
  }));


}

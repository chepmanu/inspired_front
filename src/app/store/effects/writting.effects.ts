import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { of } from 'rxjs'
import { tap,switchMap, catchError, map,} from 'rxjs/operators';

import { writtingTypes, getWrittings, getWrittingsSuccess, getWrittingsFail } from '../actions/writting.actions';
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

}

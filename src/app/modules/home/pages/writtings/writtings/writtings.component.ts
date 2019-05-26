import { Component, OnInit } from '@angular/core';
import { getWrittings } from '../../../../../store/actions/writting.actions';
import { getWrittings2, getWrittingFailed } from '../../../../../store/app.state'
import { appState,} from '../../../../../store/app.state';
import { Writting } from '../../../../../models/writting.model'
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-writtings',
  templateUrl: './writtings.component.html',
  styleUrls: ['./writtings.component.scss']
})
export class WrittingsComponent implements OnInit {
  public items = [
    'first',
    'second',
    'third',
    'fourth'
  ]
  writtings : Writting[] = []; 
  user: null;
  sub: Subscription;
  sub2: Subscription;
  errorMessage: {};
  titleError: string;
  descriptionError: string;
  bodyError: string;
  constructor(
      private store: Store<appState>
  ) {
    this.store.dispatch(new getWrittings())

  }

    
  ngOnInit() {

    this.sub = this.store.pipe(select(getWrittings2)).pipe().subscribe(item => {
      if (item){
        this.writtings = item
        return this.writtings
      }
    })

    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

}

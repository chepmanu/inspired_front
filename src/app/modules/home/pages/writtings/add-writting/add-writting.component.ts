import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'

import { appState } from '../../../../../store/app.state';
import { getWrittingFailed } from '../../../../../store/app.state'
import { Writting } from '../../../../../models/writting.model';
import { postWritting } from '../../../../../store/actions/writting.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-writting',
  templateUrl: './add-writting.component.html',
  styleUrls: ['./add-writting.component.scss']
})
export class AddWrittingComponent implements OnInit {
  writting:Writting = new Writting;
  sub2: Subscription;
  errorMessage: {};
  titleError: string;
  descriptionError: string;
  bodyError: string;

  constructor(private store: Store<appState>) { }

  ngOnInit() {

    this.sub2 = this.store.pipe(select(getWrittingFailed)).pipe().subscribe(item => {
      if (item){
        this.errorMessage = item['error2']['writtings']
        this.titleError = item['error2']['writtings']['title']
        this.descriptionError = item['error2']['writtings']['description']
        this.bodyError = item['error2']['writtings']['body']
      }
    })
  }
  onSubmit(): void{
    const payload = {
      title: this.writting.title,
      body: this.writting.body,
      description: this.writting.description,
      url: this.writting.url
    }

    this.store.dispatch( new postWritting(payload))

  }
  ngOnDestroy(){
    this.sub2.unsubscribe();
  }

}

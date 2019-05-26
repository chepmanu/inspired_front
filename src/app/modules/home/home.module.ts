import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home.routing';

import { SharedModule } from '../../shared/shared.modules';
import { WrittingsComponent } from './pages/writtings/writtings/writtings.component';

import { StoreModule } from '@ngrx/store';
import { Actions, EffectsModule } from '@ngrx/effects';

import { writtingReducer } from '../../store/reducers/writting.reducer';
import { WrittingEffects } from '../../store/effects/writting.effects';
import { reducers } from '../../store/app.state';
import { AddWrittingComponent } from './pages/writtings/add-writting/add-writting.component';

@NgModule({
    declarations: [
        HomeComponent,
        WrittingsComponent,
        AddWrittingComponent
    ],
    imports: [
        SharedModule,

        HomeRoutingModule,
        StoreModule.forFeature('WrittingFeature', reducers),
      EffectsModule.forFeature([WrittingEffects])
    ],
    exports: [HomeComponent, WrittingsComponent],
    providers: [],
})
export class HomeModule {}

import * as auth from './reducers/auth.reducers';
import * as writting from './reducers/writting.reducer'
import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store'

export interface appState{
    authState: auth.State;
    writtingState: writting.State
}


export const reducers: ActionReducerMap<appState> = {
    authState: auth.authReducer,
    writtingState: writting.writtingReducer,
}

export const getAllWrittingsState = createFeatureSelector('WrittingFeature')
export const getWritting = createSelector(
    getAllWrittingsState,
    (state: appState) => state.writtingState
)

export const getWrittings2 = createSelector(getWritting, writting.getAllWrittings)
export const getWrittingFailed = createSelector(getWritting, writting.getWrittingError)

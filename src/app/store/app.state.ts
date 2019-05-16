import * as auth from './reducers/auth.reducers';

export interface appState{
    authState: auth.State;
}
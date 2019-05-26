import { Writting } from './../../models/writting.model';
import { writtingActions, writtingTypes } from '../actions/writting.actions';

export interface State {
    fetching: boolean;
    writting: Writting [];
    errorMessage: string | null;
}

export const initialState: State = {
    fetching: false,
    writting: [],
    errorMessage: null
}

export function writtingReducer ( state = initialState, action: writtingActions ):  State {
    switch(action.type) {
        case writtingTypes.FETCH: {
            return {
                ...state,
                fetching: true,
                writting: null,
                errorMessage: null
            }
        }
        case writtingTypes.FETCH_SUCCESS: {
            return {
                ...state,
                fetching: false,
                writting: action.payload.writtings,
                errorMessage: null
            }
        }
        case writtingTypes.FETCH_FAILED: {
            return {
                ...state,
                fetching: false,
                writting: null,
                errorMessage: action.payload.error
            }
        }
        default: {
            return state
        }
    }
}


export const getAllWrittings = (state: State) => state.writting;


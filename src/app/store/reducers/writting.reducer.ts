import { Writting } from './../../models/writting.model';
import { writtingActions, writtingTypes } from '../actions/writting.actions';

export interface State {
    fetching: boolean;
    writting: Writting;
    writtings: Writting [] | null;
    errorMessage: string | null;
}

export const initialState: State = {
    fetching: false,
    writtings: [],
    writting: {
        title: "",
        body: "",
        description: "",
        "url": ""
    },
    errorMessage: null
}

export function writtingReducer ( state = initialState, action: writtingActions ):  State {
    switch(action.type) {
        case writtingTypes.FETCH: {
            return {
                ...state,
                fetching: true,
                writtings: null,
                errorMessage: null
            }
        }
        case writtingTypes.FETCH_SUCCESS: {
            return {
                ...state,
                fetching: false,
                writtings: action.payload.writtings,
                errorMessage: null
            }
        }
        case writtingTypes.FETCH_FAILED: {
            return {
                ...state,
                fetching: false,
                writtings: null,
                errorMessage: action.payload.error
            }
        }
        case writtingTypes.POST: {
            return {
                ...state,
                fetching: true,
                errorMessage: null,
                writting: {
                    title: action.payload.title,
                    body: action.payload.title,
                    description: action.payload.description,
                    url: action.payload.url
                }
            }
        }
        case writtingTypes.POST_SUCCESS: {
            return {
                ...state,
                fetching: false,
                writting: {
                    title: action.payload.title,
                    body: action.payload.title,
                    description: action.payload.desription,
                    url: action.payload.url
                },
                errorMessage: null

            }
        }
        case writtingTypes.POST_FAILED: {
            console.log('error in reducer', action.payload)
            return {
                ...state,
                fetching: false,
                errorMessage: action.payload
            }
        }
        default: {
            return state
        }
    }
}


export const getAllWrittings = (state: State) => state.writtings;
export const getWrittingError = (state: State) => state.errorMessage;


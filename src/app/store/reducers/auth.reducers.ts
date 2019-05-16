import { User } from '../../models/user.model'
import { AuthActionTypes, AuthActions } from '../actions/auth.actions';

export interface State {
    isAuthenticated: boolean;
    user: User | null;
    errorMessage: string | null;

}

export const initialState: State = {
    isAuthenticated: false,
    user: {
        token: localStorage.getItem('token'),
        email: localStorage.getItem('email')
      },
    errorMessage: null,
}

export function authReducer(state = initialState, action: AuthActions): State {
    switch (action.type) {
      case AuthActionTypes.LOGIN_SUCCESS: {
        return {
          ...state,
          isAuthenticated: true,
          user: {
            token: action.payload.token,
            email: action.payload.email
          },
          errorMessage: null
        };
      }

      case AuthActionTypes.LOGIN_FAILURE: {
          return {
              ...state,
              errorMessage: action.payload.errorMessage
          }
      }

      case AuthActionTypes.LOGIN: {
          return {
              ...state,
              user: {
                  email: action.payload.email,
                  password: action.payload.password
              },
              isAuthenticated: false,
              errorMessage: null
          }
      }

      case AuthActionTypes.SIGNUP: {
          return {
              ...state,
              isAuthenticated: false,
              user: null,
              errorMessage: null
          }
      }

      case AuthActionTypes.LOGIN_SUCCESS: {
          return {
              ...state,
              isAuthenticated: true,
              user: {
                  email: action.payload.email,
                  token: action.payload.token
              },
              errorMessage: null
          }
      }

      case AuthActionTypes.SIGNUP_FAILURE: {
          return {
              ...state,
              user: null,
              errorMessage: action.payload.errorMessage
          }
      }

      default: {
        return state;
      }
    }
  }

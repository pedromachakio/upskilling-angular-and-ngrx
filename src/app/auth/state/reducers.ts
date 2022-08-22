import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../models/authState.interface';
import { registerAction } from '../state/actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

/* export const authReducer = createReducer(
  initialState,
  on(registerAction,
    (state: AuthStateInterface) => {
    return {
      isSubmitting: true,
    };
  })
);
 */

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}

import { createAction, props } from '@ngrx/store';

import { CurrentUserInterface } from 'src/app/shared/models/currentUser.interface';
import { RegisterRequestInterface } from '../../models/registerRequest.interface';
import { ActionTypes } from '../actionTypes';

export const registerAction = createAction(
  ActionTypes.Register,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.RegisterSuccess,
  props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailureAction = createAction(ActionTypes.RegisterFailure);

import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../models/registerRequest.interface';
import { ActionTypes } from './actionTypes';

export const registerAction = createAction(
  ActionTypes.Register,
  props<{ request: RegisterRequestInterface }>()
);

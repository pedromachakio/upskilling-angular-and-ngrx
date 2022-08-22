import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './actionTypes';

export const registerAction = createAction(
  ActionTypes.Register,
  props<{ username: string; password: string; email: string }>()
);

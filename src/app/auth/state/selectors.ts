import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from '../models/authState.interface';

export const selectAuthState =
  createFeatureSelector<AuthStateInterface>('auth');

export const selectIsSubmitting = createSelector(
  selectAuthState,
  (state: AuthStateInterface) => state.isSubmitting
);

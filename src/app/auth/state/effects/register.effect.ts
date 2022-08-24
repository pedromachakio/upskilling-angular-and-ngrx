import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';

import { of } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/models/currentUser.interface';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.actions';

@Injectable()
export class RegisterEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction), //  ofType(ActionTypes.Register),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({ currentUser }); // this return automagically dispatches the respective action
          }),
          catchError(() => {
            return of(registerFailureAction());
          })
        );
      })
    )
  );
}

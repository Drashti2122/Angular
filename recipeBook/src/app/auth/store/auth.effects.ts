import { catchError, map, of, tap } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import * as AuthActions from './auth.actions';
import { switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

import { AuthService } from '../auth.service';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

const handleAuthentication = (
  expiresIn: number,
  email: string,
  userId: string,
  token: string) => {
  const expirationDate = new Date(new Date().getTime() + + expiresIn * 1000);
  return new AuthActions.AuthenticateSuccess({
    email: email,
    userID: userId,
    token: token,
    expirationDate: expirationDate,
    redirect: true
  });
};

const handleError = (errorRes: any) => {
  let errorMessage = 'An Unknown error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(new AuthActions.AuthenticateFail(errorMessage));
  }
  // console.log(errorRes.error.error)
  switch (errorRes.error.error.message) {
    case 'EMAIL_NOT_FOUND':
      errorMessage = 'This email does not exist.';
      break;
    case 'INVALID_PASSWORD':
      errorMessage = "This password is not correct";
      break;
    case 'USER_DISABLED':
      errorMessage = "The User account has been disabled by an administer";
      break;
    case 'EMAIL_EXISTS':
      errorMessage = 'This email exists already';
      break;
    case 'MISSING_REQUEST_URI':
      errorMessage = 'Something went wrong!Please try again.';
      break;
  }
  return of(new AuthActions.AuthenticateFail(errorRes));
};

@Injectable()
export class AuthEffects {
  
  // @Effect
  authSignup = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.SIGNUP_START),
    switchMap((signupAction: AuthActions.SignupStart) => {
      return this.http.post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB0HDuhb7YoGQsE6KWo3CP53SAMV-9yfQs",
        {
          email: signupAction.payload.email,
          password: signupAction.payload.password,
          returnSecureToken: true
        }
      )
        .pipe(
          tap(resData => {
            this.authService.setLogoutTimer(+resData.expiresIn * 1000);
          }),
          map(resData => {
            return handleAuthentication(
              +resData.expiresIn,
              resData.email,
              resData.localId,
              resData.idToken)
          }),
          catchError(errorRes => {
            return handleError(errorRes)
          })
        )
    })
  ));

  // @Effect()
  authLogin = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB0HDuhb7YoGQsE6KWo3CP53SAMV-9yfQs',
        {
          email: authData.payload.email,
          password: authData.payload.password,
          returnSecureToken: true
        }).pipe(
          // map(resData => {
          //   const expirationDate = new Date(new Date().getTime() + + resData.expiresIn * 1000);
          //   return new AuthActions.AuthenticateSuccess({
          //     email: resData.email,
          //     userID: resData.localId,
          //     token: resData.idToken,
          //     expirationDate: expirationDate
          //   });
          tap(resData => {
            this.authService.setLogoutTimer(+resData.expiresIn * 1000);
          }),
          map(resData => {
            return handleAuthentication(
              +resData.expiresIn,
              resData.email,
              resData.localId,
              resData.idToken)
          }),
          catchError(errorRes => {
            return handleError(errorRes);
          })
        )
    })));

  // @Effect({ dispatch: false })
  authRedirect = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.AUTHENTICATE_SUCCESS),
    tap((authSuccessAction: AuthActions.AuthenticateSuccess) => {
      if (authSuccessAction.payload.redirect) {
        this.router.navigate(['/']);
      }
    })), { dispatch: false });

  // @Effect()
  autoLogin = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.AUTO_LOGIN),
    map(() => {
      const userData: {
        email: string;
        id: string
        _token: string;
        _tokenExpirationDate: string;
      } = JSON.parse(localStorage.getItem('userData') || '{}');
      if (!userData) {
        // return;
        return { type: 'DUMMY' };
      }

      const loadedUser = new User(
        userData.email,
        userData.id,
        userData._token,
        new Date(userData._tokenExpirationDate));

      if (loadedUser.token) {
        // this.user.next(loadedUser);
        const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
        // this.autoLogout(expirationDuration);
        this.authService.setLogoutTimer(expirationDuration);
        return new AuthActions.AuthenticateSuccess({
          email: loadedUser.email,
          userID: loadedUser.id,
          token: loadedUser.token,
          expirationDate: new Date(userData._tokenExpirationDate),
          redirect: false
        })
        // const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
        // this.autoLogout(expirationDuration);
      }
      return { type: 'DUMMY' }
    })

  ))

  // @Effect({ dispatch: false })
  authLogout = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(() => {
      this.authService.clearLogoutTimer();
      localStorage.removeItem('userData');
      this.router.navigate(['/auth']);
    })
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService) { }
}

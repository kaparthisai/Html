import { Action } from '@ngrx/store';
export const LOGIN_START = '[Auth] LOGIN_START'
export const LOGIN = '[Auth] LOGIN';
export const LOGIN_FAIL = '[Auth] LOGIN_FAIL';
export const SIGN_UP = '[Auth] SIGN_UP';
export const CLEAR_ERROR = '[Auth] CLEAR_ERROR';
export const AUTO_LOGIN = '[Auth] AUTO_LOGIN';
export const LOGOUT = '[Auth] LOGOUT';

export  class Login implements Action{
    readonly type= LOGIN;
    constructor (
        public payload: {
        email : string;
        userId: string;
        token: string;
        expirationDate: Date;
    }){}
}
export class Logout implements Action {
    readonly type = LOGOUT;

}
export class LoginStart implements Action{
    readonly type = LOGIN_START;
    constructor(public payload:{email: string; password:string}){}
}
export class LoginFail implements Action{
    readonly type = LOGIN_FAIL;
    constructor (public payload : string){}
}
export class Signup implements Action {
   readonly type = SIGN_UP;
constructor (public payload:{email: string; password:string}){}
}
export class ClearError implements Action{
    readonly type = CLEAR_ERROR;
}
export class AutoLogin implements Action{
    readonly type  = AUTO_LOGIN;
}
 export type AuthActions = Login | Logout| LoginStart|LoginFail|Signup|ClearError|AutoLogin;
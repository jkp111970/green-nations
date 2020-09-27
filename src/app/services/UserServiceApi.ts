import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {delay, flatMap} from 'rxjs/internal/operators';

import { UserApi } from '../../fw/services/UserApi';

@Injectable()
export class UserServiceApi implements UserApi {

    authenticated: boolean = false;

    constructor(){

    }

    signIn(userName: String, password: String, rememberMe: boolean) : Observable<any> {
        console.log("#### Calling Sign In Rest Service");
        //mygreennation.com/signin.. data..
        //this.authenticatedUserComp.isAuthenticated = true;
        this.authenticated = true;
        
        return of({})
                .pipe(delay(2000));
                //.pipe(flatMap(x=> Observable.throw("Invalid UserName and Password")));
                
    }

    isAuthenticated(): boolean {
        return this.authenticated;
    }
   
}
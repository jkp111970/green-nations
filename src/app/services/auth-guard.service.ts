import { Injectable } from '@angular/core';
import { Router,CanActivate,CanActivateChild } from '@angular/router';

import { UserServiceApi } from './UserServiceApi';

@Injectable()
export class AuthGaurd implements CanActivate, CanActivateChild {


    constructor(private userServiceApi: UserServiceApi, private router: Router) {
    }

    canActivate() : boolean {
        if(!this.userServiceApi.isAuthenticated()) {
            this.router.navigate(['/']);
        }

        return this.userServiceApi.isAuthenticated();
    }

    canActivateChild() : boolean {
        return this.canActivate();
    }

}
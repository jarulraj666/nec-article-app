import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReaderGuardService {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const roles: string[] = JSON.parse(sessionStorage.getItem('roles') || '');
    return roles?.includes('ROLE_USER');
  }
}

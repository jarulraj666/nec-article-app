import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './common/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nec-article-app';
  
  constructor(private router: Router,
    private loginservice: LoginService) { }


  getRoleData(role: string): boolean {
    if(sessionStorage.getItem('roles')) {
      const roles: string[] = JSON.parse(sessionStorage.getItem('roles') || '');
      return roles.includes(role);
    }
    
    return false;
  }

  logout(): void {
    this.loginservice.logOut();
    this.router.navigate(["/login"]);
  }

  isLoggedIn(): boolean {
    return this.loginservice.isUserLoggedIn();
  }
}

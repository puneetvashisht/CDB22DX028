import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  private isLoggedInSubscription: Subscription;

  constructor(public authService: AuthService) {
    this.isLoggedInSubscription = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.getIsAuth();
    this.isLoggedInSubscription = this.authService
      .getAuthStatsListener()
      .subscribe((isAuthenticated) => {
        // console.log('isAuthenticated', isAuthenticated);
        this.isLoggedIn = isAuthenticated;
      });
  }

  onLogout() {
    console.log('logout called');

    this.authService.logout();
  }

  ngOnDestroy() {
    this.isLoggedInSubscription.unsubscribe();
    // this.unsubscribe();
  }
}

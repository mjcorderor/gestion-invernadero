import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { Observable } from 'rxjs';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})

export class HeaderComponent implements OnInit {
  user$: Observable<User | null>;
  userName: string = '';

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$; // Observable del usuario
  }

  ngOnInit(): void {
    // Suscribirse para obtener el nombre del usuario (displayName o email)
    this.user$.subscribe(user => {
      if (user) {
        this.userName = user.displayName || user.email || 'Usuario';
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}

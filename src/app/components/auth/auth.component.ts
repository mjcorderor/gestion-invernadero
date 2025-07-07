import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: false,
})
export class AuthComponent {
  email: string = '';
  password: string = '';
  user: any = null;

  constructor(private authService: AuthService) {}

  async register() {
    try {
      this.user = await this.authService.register(this.email, this.password);
      alert('Registro exitoso');
    } catch (error) {
      alert('Error en el registro');
    }
  }

  async login() {
    try {
      this.user = await this.authService.login(this.email, this.password);
      alert('Inicio de sesión exitoso');
    } catch (error) {
      alert('Error en el inicio de sesión');
    }
  }

  logout() {
    this.authService.logout();
    this.user = null;
    alert('Sesión cerrada');
  }
}

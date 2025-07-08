import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

interface BoardOption {
  title: string;
  description: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent {
  boardOptions: BoardOption[] = [
    {
      title: 'Invernaderos',
      description: 'Gestiona tus invernaderos',
      icon: 'storefront',
      route: '/invernaderos'
    },
    {
      title: 'Producción',
      description: 'Registra y consulta la producción',
      icon: 'bar_chart',
      route: '/produccion'
    },
    {
      title: 'Reportes',
      description: 'Visualiza reportes de desempeño',
      icon: 'assessment',
      route: '/reportes'
    },
    {
      title: 'Configuración',
      description: 'Ajusta las opciones de la app',
      icon: 'settings',
      route: '/configuracion'
    }
  ];

  constructor(@Inject(Router) private router: Router) {}

  navigate(route: string): void {
    console.log('Navegando a:', route);
    this.router.navigate([route]);
  }
}

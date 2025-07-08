import { ApplicationRef, Component, OnInit } from '@angular/core';
import { InvernaderoService } from '../../services/invernadero.service';
import { Invernadero } from '../../models/invernadero.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { InvernaderoDialogComponent } from './invernadero-dialog/invernadero-dialog.component';

@Component({
  selector: 'app-invernadero',
  templateUrl: './invernadero.component.html',
  styleUrls: ['./invernadero.component.scss'],
  standalone: false,
})
export class InvernaderoComponent implements OnInit {
  invernaderos$: Observable<Invernadero[]> = new Observable();
  invernaderos: Invernadero[] = [];
  invernaderosFiltrados: Invernadero[] = [];
  buscando: string = '';
  editandoId: string | null = null;

  constructor(
    private invernaderoService: InvernaderoService,
    private dialog: MatDialog,
    private appRef: ApplicationRef
  ) {}

 /*  ngOnInit(): void {
    this.invernaderos$ = this.invernaderoService.getInvernaderos();
    this.invernaderos$.subscribe((data) => {
      this.invernaderos = data;
      this.filtrarInvernaderos();
    });
  } */

  ngOnInit(): void {
    this.invernaderos$ = this.invernaderoService.getInvernaderos();
    this.invernaderos$.subscribe((data) => {
      this.invernaderos = data;
      this.invernaderosFiltrados = [...data];
    });
  }

  filtrarInvernaderos(): void {
    this.invernaderosFiltrados = this.invernaderos.filter((inv) =>
      inv.name.toLowerCase().includes(this.buscando.toLowerCase())
    );
  }

  abrirDialogoAgregar(): void {
    const dialogRef = this.dialog.open(InvernaderoDialogComponent, {
      width: '400px',
      data: null
    });

    dialogRef.afterClosed().subscribe(async (resultado: Invernadero | undefined) => {
      if (resultado) {
        await this.invernaderoService.agregarInvernadero(resultado);
        this.ngOnInit();
      }
    });
  }

  editarInvernadero(invernadero: Invernadero): void {
    this.editandoId = invernadero.id || null;
  }

  async guardarEdicion(invernadero: Invernadero): Promise<void> {
    if (invernadero.id) {
      await this.invernaderoService.actualizarInvernadero(invernadero.id, invernadero);
      this.editandoId = null;
    }
  }

  cancelarEdicion(): void {
    this.editandoId = null;
  }

  async desactivarInvernadero(id: string): Promise<void> {
    await this.invernaderoService.desactivarInvernadero(id);
  }
}

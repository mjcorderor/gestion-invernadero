import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Invernadero } from '../../../models/invernadero.model';

@Component({
  selector: 'app-invernadero-dialog',
  templateUrl: './invernadero-dialog.component.html',
  styleUrls: ['./invernadero-dialog.component.scss'],
  standalone: false
})
export class InvernaderoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<InvernaderoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public invernadero: Invernadero | null
  ) {}

  onGuardar(invernadero: Invernadero): void {
    this.dialogRef.close(invernadero); // Retorna el invernadero al componente padre
  }

  onCancelar(): void {
    this.dialogRef.close(); // Cancela sin devolver datos
  }
}

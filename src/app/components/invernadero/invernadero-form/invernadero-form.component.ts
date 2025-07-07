import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Invernadero } from '../../../models/invernadero.model';


@Component({
  selector: 'app-invernadero-form',
  standalone: false,
  templateUrl: './invernadero-form.component.html',
  styleUrls: ['./invernadero-form.component.scss'],
})
export class InvernaderoFormComponent implements OnChanges {
  @Input() invernadero: Invernadero | null = null;
  @Output() guardar = new EventEmitter<Invernadero>();
  @Output() cancelar = new EventEmitter<void>();

  invernaderoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.invernaderoForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['invernadero'] && this.invernadero) {
      this.invernaderoForm.patchValue({
        name: this.invernadero.name,
        location: this.invernadero.location
      });
    }
  }

  onGuardar() {
    if (this.invernaderoForm.valid) {
      const datos: Invernadero = {
        id: this.invernadero?.id || '',
        name: this.invernaderoForm.value.name,
        location: this.invernaderoForm.value.location,
        activo: this.invernadero?.activo ?? true
      };
      this.guardar.emit(datos);
      this.invernaderoForm.reset();
    }
  }

  onCancelar() {
    this.cancelar.emit();
    this.invernaderoForm.reset();
  }
}

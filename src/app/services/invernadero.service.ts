import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Invernadero } from '../models/invernadero.model';

@Injectable({
  providedIn: 'root',
})
export class InvernaderoService {
  private collectionName = 'invernaderos';

  constructor(private afs: AngularFirestore) {}

  getInvernaderos(): Observable<Invernadero[]> {

    return this.afs
      .collection<Invernadero>(this.collectionName, ref =>
        ref.where('activo', '==', true)
      )
      .valueChanges({ idField: 'id' });
  }

  agregarInvernadero(invernadero: Invernadero): Promise<void> {
    const id = this.afs.createId();
    return this.afs
      .collection(this.collectionName)
      .doc(id)
      .set({ ...invernadero, id, activo: true });
  }

  actualizarInvernadero(id: string, invernadero: Partial<Invernadero>): Promise<void> {
    return this.afs.collection(this.collectionName).doc(id).update(invernadero);
  }

  desactivarInvernadero(id: string): Promise<void> {
    return this.afs.collection(this.collectionName).doc(id).update({ activo: false });
  }
}

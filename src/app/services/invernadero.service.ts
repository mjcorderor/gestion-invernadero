import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  setDoc,
  updateDoc,
  doc,
  query,
  where,
  CollectionReference
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Invernadero } from '../models/invernadero.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class InvernaderoService {
  private firestore: Firestore = inject(Firestore);
  private collectionName = 'invernaderos';

  getInvernaderos(): Observable<Invernadero[]> {
    const ref = collection(this.firestore, this.collectionName) as CollectionReference<Invernadero>;
    const q = query(ref, where('activo', '==', true));
    return collectionData<Invernadero>(q, { idField: 'id' });
  }

  agregarInvernadero(invernadero: Invernadero): Promise<void> {
    const id = uuidv4(); // Usamos UUID para emular `afs.createId()`
    const ref = doc(this.firestore, `${this.collectionName}/${id}`);
    return setDoc(ref, { ...invernadero, id, activo: true });
  }

  actualizarInvernadero(id: string, invernadero: Partial<Invernadero>): Promise<void> {
    const ref = doc(this.firestore, `${this.collectionName}/${id}`);
    return updateDoc(ref, invernadero);
  }

  desactivarInvernadero(id: string): Promise<void> {
    const ref = doc(this.firestore, `${this.collectionName}/${id}`);
    return updateDoc(ref, { activo: false });
  }
}
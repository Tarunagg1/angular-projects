import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PasswordManagerService {

  constructor(private fireStore: Firestore) { }

  addSite(data: object) {
    const dbInstance = collection(this.fireStore, 'sites');
    return addDoc(dbInstance, data);
  }

  getSite() {
    const dbInstance = collection(this.fireStore, 'sites');
    return collectionData(dbInstance, { idField: 'id' });
  }

  updateSite(id: string, data: object) {
    const dbInstance = doc(this.fireStore, 'sites',id);
    return updateDoc(dbInstance, data);
  }


  deleteeSite(id: string) {
    const dbInstance = doc(this.fireStore, 'sites',id);
    return deleteDoc(dbInstance);
  }

}

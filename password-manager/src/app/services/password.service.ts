import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private fireStore: Firestore) { }

  addPassword(siteId: string, data: object) {
    const dbInstance = collection(this.fireStore, `sites/${siteId}/passwords`);
    return addDoc(dbInstance, data);
  }

  getSitePassword(siteId: string) {
    const dbInstance = collection(this.fireStore, `sites/${siteId}/passwords`);
    return collectionData(dbInstance, { idField: 'id' });
  }

  updateSite(siteId: string, passwordId: string, data: object) {
    const dbInstance = doc(this.fireStore, `sites/${siteId}/passwords`, passwordId);
    return updateDoc(dbInstance, data);
  }


  deleteeSite(siteId: string, passwordId: string,) {
    const dbInstance = doc(this.fireStore, `sites/${siteId}/passwords`, passwordId);
    return deleteDoc(dbInstance);
  }
}

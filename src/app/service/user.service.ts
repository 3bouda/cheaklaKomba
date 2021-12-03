import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public fireservice:AngularFirestore) { }
  public getPost(){
    return this.fireservice.collection('users').snapshotChanges();
  }

  public addNewPost(v:any) {
     return this.fireservice.collection('users').add(v);
  }
  public updateNewPost(v:any,id:string) {
     return this.fireservice.collection('users').doc(id).set(v);

  }
  public deletePost(item:any) {
    return this.fireservice.collection('users').doc(item.id).delete();
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //userdata!:any;
  constructor(public fireservice:AngularFirestore) { }

  public getUser(){
    return this.fireservice.collection('users').snapshotChanges();
  }

  public addUser(v:any) {
     return this.fireservice.collection('users').add(v);
  }
  public updateUsert(v:any,id:string) {
     return this.fireservice.collection('users').doc(id).set(v);

  }
  public deleteUser(item:any) {
    return this.fireservice.collection('users').doc(item.id).delete();
  }
  public verifUser(email:string){
    return this.fireservice.collection('users',ref=>ref.where('email','==',email)).snapshotChanges();
  }
}

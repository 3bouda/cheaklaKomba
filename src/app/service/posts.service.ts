import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(public fireservice:AngularFirestore) { }
  public getPost(){
    return this.fireservice.collection('posts').snapshotChanges();
  }

  public addNewPost(v:any) {
     return this.fireservice.collection('posts').add(v);
  }
  public updateNewPost(v:any,id:string) {
     return this.fireservice.collection('posts').doc(id).set(v);

  }
  public deletePost(item:any) {
    return this.fireservice.collection('posts').doc(item.id).delete();
  }
}

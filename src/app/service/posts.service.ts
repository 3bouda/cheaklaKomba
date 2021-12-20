import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  user!:any;

  constructor(public fireservice:AngularFirestore) { }
  public giveUser(u:any){
    this.user=u;

  }
  public getUser(){
    return this.user;
  }

  //////////////////////////Post//////////////////////////////
  public getPost(){
    return this.fireservice.collection('posts').snapshotChanges();
  }
  public addPost(v:any) {
     return this.fireservice.collection('posts').add(v);
  }
  public updatePost(v:any,id:string) {
     return this.fireservice.collection('posts').doc(id).set(v);
  }
  public deletePost(item:any){
    return this.fireservice.collection('posts').doc(item.id).delete();
  }
  ////////////////////////Comment////////////////////////////////////
  public getComment(id:string){
    return this.fireservice.collection('posts').doc(id).collection('comment').snapshotChanges();
  }
  public addComment(v:any,id:string) {
    return this.fireservice.collection('posts').doc(id).collection('comment').add(v);
  }
  public updateComment(v:any,id:string,idd:string) {
    return this.fireservice.collection('posts').doc(id).collection('comment').doc(idd).set(v);
 }
 public deleteComment(item:any){
  return this.fireservice.collection('posts').doc(item.id).delete();
}
/////////////////////////////reply//////////////////////////////
public getReply(id:string,idd:string){
  return this.fireservice.collection('posts').doc(id).collection('comment').doc(idd).collection('reply').snapshotChanges();
}
public addReply(v:any,id:string,idd:string) {
  return this.fireservice.collection('posts').doc(id).collection('comment').doc(idd).collection('reply').add(v);
}
}

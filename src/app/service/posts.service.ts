import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(public fireservice:AngularFirestore) { }

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

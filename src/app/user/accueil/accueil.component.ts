import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';
import { Reply } from 'src/app/models/reply';
import { User } from 'src/app/models/user';
import { PostsService } from 'src/app/service/posts.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private userService:UserService, private servicePost:PostsService, private fb:FormBuilder) {}
  user!:any;
  posts:any;
  PostNumber:number=0;
  PosForm!: FormGroup ;
  pos!:Post;

  comment:any;
  CommentNumber:number=0;
  comForm!: FormGroup;
  com!:Comment;

  reply:any;
  replyNumber:number=0;
  replyForm!: FormGroup;
  rep!:Reply;


  ngOnInit(): void {
    this.user=this.servicePost.getUser();
    this.getPosts();
    this.PosForm = this.fb.group({
      description:"",
      date:"",
      voteup:0,
      votedown:0,
      user:this.user.data.name,
      sujet:""
  })
    this.comForm = this.fb.group({
      description:"",
      date:"",
      voteup:0,
      votedown:0,
      user:this.user.data.name,
  })
    this.replyForm = this.fb.group({
      description:"",
      date:"",
      user:this.user.data.name,
    })

  }

  getPosts(){
    this.servicePost.getPost().subscribe(actioanArray=>{
       this.posts= actioanArray.map(item => {
        return{
          id : item.payload.doc.id,
          data: item.payload.doc.data() ,
        }
      })
    });
  }
  verifPostIndex(i:number):boolean{
    if(this.PostNumber==i){
      return true;
    }return false;
  }
  addPost(){
    this.PosForm.getRawValue();
    this.pos=this.PosForm.value;
    console.log(this.PosForm.value);
    this.servicePost.addPost(this.pos);
  }
  updatePost(){}
  deletePost(){}
  ///////////////comment////////////////////////////
  getComments(id:string,i:number){
    this.servicePost.getComment(id).subscribe(actioanArray=>{
      this.comment=actioanArray.map(item => {
        return{
          id : item.payload.doc.id,
          data: item.payload.doc.data(),
        }
      })
    })
    this.PostNumber=i;
  }
  addComment(id:string){
    this.comForm.getRawValue();
    this.com=this.comForm.value;
    console.log(this.com)
    this.servicePost.addComment(this.com,id);
  }
  updateComment(){}
  deleteComment(){}
  verifCommentIndex(i:number):boolean{
    if(this.CommentNumber==i){
      return true;
    }return false;
  }
  ///////////////////reply//////////////////////////////
  getReplys(id:string,idd:string,j:number){
    this.servicePost.getReply(id,idd).subscribe(actioanArray=>{
      this.reply=actioanArray.map(itemmm => {
        return{
          id : itemmm.payload.doc.id,
          data: itemmm.payload.doc.data(),
        }
      })
    })
    this.CommentNumber=j;
  }
  addReply(id:string,idd:string){
    this.replyForm.getRawValue();
    this.rep=this.replyForm.value;
    console.log(this.rep)
    this.servicePost.addReply(this.rep,id,idd);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../service/user.service';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
ef!:any;
users:any;

  constructor(private router:Router,private usreService :UserService,private postService:PostsService) { }

  ngOnInit(): void {
  }
  OnSubmit(user:string,pass:string){
    if(user=="iheb"){this.router.navigate(['/homeadmin']);}
    else if(this.OnVerif(user)!=null){
      for(let item of this.users){
          if(item.data.pwd==pass){
            this.postService.giveUser(item);
            this.router.navigate(['/homeuser']);
          }
          else{
            Swal.fire('Non connecté','mot de passe incorrecte!','error');
          }
        }
    }

   }
   OnVerif(user:string){
    this.usreService.verifUser(user).subscribe(actioanArray=>{
      this.users= actioanArray.map(item =>{
       return{
         id : item.payload.doc.id,
         data: item.payload.doc.data() ,
       }
     })
   });
    return this.users;
   }
}

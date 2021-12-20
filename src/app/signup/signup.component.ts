import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../service/user.service';
import { PostsService } from '../service/posts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,private postService:PostsService,private userService:UserService,private fb:FormBuilder) { }
  UserForm!: FormGroup ;
  user!:User;
  ngOnInit(): void {
    this.UserForm = this.fb.group({
      email:"",
      phone:0,
      name:"",
      lastname:"",
      adr:"",
      pwd:"",
      description:""
  })
  }
  addUser(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your data has been saved ',
      text: 'Log In to continue',
      showConfirmButton: false,
      timer: 1500
    })
    this.UserForm.getRawValue();
    this.user=this.UserForm.value;
    this.userService.addUser(this.user);
    this.router.navigate(['/login']);

  }

}

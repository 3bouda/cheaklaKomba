import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!:any;
  constructor(private servicePost:PostsService) { }

  ngOnInit(): void {

    this.user=this.servicePost.getUser();
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css']
})
export class HomeadminComponent implements OnInit {
users!:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.userService.getUser().subscribe(actioanArray=>{
       this.users= actioanArray.map(item => {
        return{
          id : item.payload.doc.id,
          data: item.payload.doc.data() ,
        }
      })
    });
  }
  delete(ss:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.userService.deleteUser(ss);
      }
    })

  }
}

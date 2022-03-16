import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userData: any = [];
  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(){
    this.usersService.list().subscribe((response)=>{
      this.userData = response;
    },(error=>{

    }));
  }

  createUser(){
    let user = {
      id: new Date().getTime(),
      name:`Jeel Ratneshwar` 
    }
    this.usersService.store(user).subscribe((response)=>{
      this.listUsers();
    },(error=>{

    }));
  }

  editUser(id: any){
    let user = {
      id: new Date().getTime(),
      name:`Jeel R` 
    }
    this.usersService.update(id,user).subscribe((response)=>{
      this.listUsers();
    },(error=>{

    }));
  }

  deleteUser(id: any){
    this.usersService.delete(id).subscribe((response)=>{
      this.listUsers();
    },(error=>{
    }));
  }

}

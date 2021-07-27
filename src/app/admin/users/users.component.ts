import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../api/user-api.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userApi:UserApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  users : User[] = [];

  getUsers() {
    this.userApi.getUsers()
                .subscribe(
                  (data)=>{this.users = data}
                )
  }

  deleteUser(userId: number) {
    console.log(userId);
    this.userApi.deleteUser(userId).subscribe( () => console.log("delete"));
  }

  detailsUser(userId: number) {
    
  }

}

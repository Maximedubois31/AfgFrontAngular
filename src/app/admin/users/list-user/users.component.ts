import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../../api/user-api.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router: Router, private userApi:UserApiService) { }

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

  updateUser(userId: number) {
    let link = ['/user/edit/', userId]
    this.router.navigate(link);
  }

  createUser() {
    let link = ['/user/edit']
    this.router.navigate(link);
  }

}

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyApiService } from '../../api/companyApi.service';
import { UserApiService } from '../../api/user-api.service';
import { Company } from '../../models/company.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router: Router, private userApi:UserApiService, private companyService:CompanyApiService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getCompanies();
  }

  users : User[] = [];
  companies : Company[] = [];

  getUsers() {
    this.userApi.getUsers()
                .subscribe(
                  (data)=>{this.users = data;}
                )
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe(elements => this.companies = elements)
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

  active(user: User) {
    user.active = !user.active;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from '../../api/user-api.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-edit-user',
  template: `
    <user-form [user]="user"></user-form>
  `,
  styles: [
  ]
})
export class EditUserComponent implements OnInit {

  user!: User;

  constructor(    private route: ActivatedRoute,private activatedRouter:ActivatedRoute,
    private userApi:UserApiService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {

    let id : any;
    if (this.activatedRouter.snapshot.paramMap.get("id")) {

      id = this.activatedRouter.snapshot.paramMap.get("id");
      this.userApi.getUserById(Number(id)).subscribe(element => this.user = element);   
    } else {
      this.user = ({} as User);
    }
  }

}

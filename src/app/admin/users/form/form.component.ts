import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyApiService } from '../../api/companyApi.service';
import { UserApiService } from '../../api/user-api.service';
import { Company } from '../../models/company.model';
import { User } from '../../models/user.model';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './helpers/must-match.validator';

@Component({
  selector: 'user-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  companies: Company[] = [];

  @Input() user!:User;

  constructor( private router: Router, private formBuilder: FormBuilder ,
     private userApi:UserApiService, private activatedRouter:ActivatedRoute, 
     private companyApi:CompanyApiService) { }

  ngOnInit() {
    this.validForm();
    this.getCompanies();
  }

  validForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      active: [],
      roles: [],
      company: []
    });
  }

  active(user: User) {
    user.active = !user.active;
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
        // stop here if form is invalid
        if (!this.registerForm.invalid) {
          this.updateUser();
        } 
  }

  updateUser() {
    this.userApi.updateUser(this.user).subscribe( () => this.goBack());
  }

  goBack() {
    this.submitted = false;
    this.router.navigate(['/users']);
  }

  getCompanies(): void{  
    this.companyApi.getCompanies().subscribe(elements => this.companies = elements);
    console.log(this.companies);
  }
}


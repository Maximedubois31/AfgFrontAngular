import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyApiService } from '../../api/companyApi.service';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-companies-form',
  templateUrl: './companies-form.component.html',
  styleUrls: ['./companies-form.component.css']
})
export class CompaniesFormComponent implements OnInit {

  @Input() company!: Company;

  constructor(private companyApiService: CompanyApiService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany(): void {

    let id: any;
    if (this.activatedRouter.snapshot.paramMap.get("id")) {

      id = this.activatedRouter.snapshot.paramMap.get("id");
      this.companyApiService.getCompany(Number(id)).subscribe(element => this.company = element);

    } else {

      this.company = ({} as Company)
    }
  }

  onSubmit(): void {
    this.companyApiService.updateCompany(this.company).subscribe(() => this.goBack());
  }

  goBack() {
    let link = ['/companies']
    this.router.navigate(link);
  }
}

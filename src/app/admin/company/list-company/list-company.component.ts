import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyApiService } from '../../api/companyApi.service';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {

  companies: Company[] = [];

  constructor(private companyApiService: CompanyApiService, private router: Router) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyApiService.getCompanies().subscribe(companies => this.companies = companies)
  }

  deleteCompany(company: Company): void {
    this.companyApiService.deleteCompany(company.id)
      .subscribe(_ => this.companies = this.companies.filter((elem) => elem.id != company.id));
  }

  goEdit(company: Company) {
    let link = ['/company/edit', company.id];
    this.router.navigate(link);
  }

  goNew() {
    let link = ['/company/edit'];
    this.router.navigate(link);
  }

  goBack(): void {
    this.router.navigate(['/company']);
  }
}

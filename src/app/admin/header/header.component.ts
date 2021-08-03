import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


const APP_URL = environment.appUrl;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appUrl: string = APP_URL;
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

constructor(private router:Router){}
 
  code_error(): void{
    this.router.navigateByUrl('/error')
  }

  nav_error(): void{
    this.router.navigateByUrl('/this_page_not_exist')
  }
}

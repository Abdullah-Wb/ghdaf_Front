import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  signout(){
    localStorage.removeItem("user");
    localStorage.removeItem("token")

    this.router.navigate(['/auth/login']);

  }

}

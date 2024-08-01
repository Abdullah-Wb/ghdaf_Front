import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MENU } from '../menu';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  menuList = []
  menu = MENU
  ngOnInit(): void {
    const user_type = JSON.parse(localStorage.getItem('user')).user.user_type_id;

    for (let value of this.menu) {
      if (value.user_type_list.includes(user_type)) {
        this.menuList.push(value)
      }
    }
  }

  signout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token")

    this.router.navigate(['/auth/login']);

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login_form = {
    email: null,
    password: null,
  };
  constructor(private impApiService:ImpApiService, private router:Router)  {




}
ngOnInit(): void {
 let user =JSON.parse( localStorage.getItem('user'))
console.log(user.user.email)
}



login(){
  this.impApiService.post(auth.login,this.login_form).subscribe(data=>{
    localStorage.setItem('user', JSON.stringify(data))
    localStorage.setItem('token', data.user.token)

this.router.navigate(['main-apps']

)

    console.log(data)
  })
}}

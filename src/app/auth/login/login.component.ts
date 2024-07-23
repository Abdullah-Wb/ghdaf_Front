import { Component, OnInit } from '@angular/core';
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
  constructor(private impApiService:ImpApiService) {
    

  
  
  
}
ngOnInit(): void {
   
}
login(){
  this.impApiService.post(auth.login,this.login_form).subscribe(data=>{

    console.log(data)
  })
}}
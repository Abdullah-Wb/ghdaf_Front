
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  testrest:boolean=false;
  testorg:boolean=false;
  onButtonClick( ){
    this.testrest=true
    
  }
  onButtonClicke( ){
    this.testorg=true
    
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

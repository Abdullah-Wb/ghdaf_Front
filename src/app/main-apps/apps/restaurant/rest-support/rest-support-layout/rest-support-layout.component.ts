import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-support-layout',
  templateUrl: './rest-support-layout.component.html',
  styleUrls: ['./rest-support-layout.component.scss']
})
export class RestSupportLayoutComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

//-------------
// selectType(type) {

//   if (type == 1)  {
//     // code to be executed if condition is true
//   } if (type ==2) {


//   }


//   this.type = type

// }


//-------------
 getSelectValue()
        {
            var selectedValue = document.getElementById("type");
            console.log(selectedValue);
        }






}

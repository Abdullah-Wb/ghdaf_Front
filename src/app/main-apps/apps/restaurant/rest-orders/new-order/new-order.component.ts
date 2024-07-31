import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';
import { rest_orders } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {
  formData = null;
  submitted_creat = false;
selectedImg : File | null = null



  constructor(private formBuilder: FormBuilder ,private impApiService:ImpApiService,private router:Router) { }

  ngOnInit(): void {



    this.formData = this.formBuilder.group({
      name: ['', [Validators.required ]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required ]],
      quantity: ['', [Validators.required]],
      produce_date: ['', [Validators.required]],
      expire_date: ['', [Validators.required]],
      product_type_id: ['', [Validators.required]],
      productPic: ['', [Validators.required]]




    });

  }


  selectImg(event:any){
    this.selectedImg = event.target.files[0]
    console.log(event.target.files[0]);


  }



  submit(){

    console.log(this.formData.get('productPic').value);


    const body = new FormData();

    body.append('name',this.formData.get('name').value );
    body.append('description',this.formData.get('description').value );
    body.append('price',this.formData.get('price').value );
    body.append('quantity',this.formData.get('quantity').value );
    body.append('produce_date',this.formData.get('produce_date').value );
    body.append('expire_date',this.formData.get('expire_date').value );
    body.append('product_type_id',this.formData.get('product_type_id').value );
    body.append('productPic',this.selectedImg );


    this.impApiService.post(rest_orders.New_Product, body).subscribe(res => {
      console.log(res);
      this.router.navigate(['apps/rest-home']);

    })}

  }





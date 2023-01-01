import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  /**
   *
   */
  constructor(public cusService:CustomerService) {}
  
  ngOnInit() {
    this.cusService.getQuantities().subscribe(data=>{
      this.cusService.listQuantity=data;
    });
  }
  submit(form:NgForm){
    console.log('Event is working...');
  }

  insertCustomer(form:NgForm){
    console.log('Event is working...');
  }

  updateCustomer(form:NgForm){
    console.log('Event is working...');
  }

  resetForm(form:NgForm){
    console.log('Event is working...');
  }

}

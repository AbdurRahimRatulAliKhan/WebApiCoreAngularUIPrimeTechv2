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
    
  }
  submit(form:NgForm){
    console.log('Event is working...');
  }

}

import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
/**
 *
 */
constructor(public cusService:CustomerService) {}
  ngOnInit() {
    this.cusService.getCustomers().subscribe(data=>{
      this.cusService.listCustomer=data;
    });
  }
}

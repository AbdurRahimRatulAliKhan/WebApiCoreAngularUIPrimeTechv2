import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/customer.model';
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

  populateCustomer(selectedCustomer: Customer)
  {
    console.log(selectedCustomer);
    this.cusService.customerData = selectedCustomer;
  }

  delete(id:number)
  {
    if (confirm('Are you want to delete?')) {
      this.cusService.deleteCustomer(id).subscribe(data=>{
        console.log('Deleted...');
        this.cusService.getCustomers().subscribe(data=>{
          this.cusService.listCustomer=data;
        });
      },
      err=>{
        console.log('Not deleted');
      });
    }
  }
}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
constructor(public cusService:CustomerService, public datepipe:DatePipe, public toast:ToastrService) {}
  ngOnInit() {
    this.cusService.getCustomers().subscribe(data=>{
      this.cusService.listCustomer=data;
    });
  }

  populateCustomer(selectedCustomer: Customer)
  {
    console.log(selectedCustomer);

    let df=this.datepipe.transform(selectedCustomer.doj,'yyyy-MM-dd');
    selectedCustomer.doj=df;
    console.log("After Transform: ", selectedCustomer.doj);
    this.cusService.customerData = selectedCustomer;
  }

  delete(id:number)
  {
    if (confirm('Are you want to delete?')) {
      this.cusService.deleteCustomer(id).subscribe(data=>{
        // console.log('Deleted...');
        this.cusService.getCustomers().subscribe(data=>{
          this.cusService.listCustomer=data;
          this.toast.error('Success', 'Record Deleted');
        });
      },
      err=>{
        console.log('Not deleted');
      });
    }
  }
}

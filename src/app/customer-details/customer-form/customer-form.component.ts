import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/shared/customer.service';
import { Customer } from 'src/app/shared/customer.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  /**
   *
   */
  constructor(public cusService:CustomerService, public toast:ToastrService) {}
  
  ngOnInit() {
    this.cusService.getQuantities().subscribe(data=>{
      this.cusService.listQuantity=data;
    });
  }
  submit(form:NgForm){
    this.cusService.customerData.isMarried=form.value.isMarried==true?1:0;
    this.cusService.customerData.isActive=form.value.isActive==true?1:0;

    if(this.cusService.customerData.id==0)
    this.insertCustomer(form);
    else
    this.updateCustomer(form);
  }

  insertCustomer(myform:NgForm){
    this.cusService.saveCustomer().subscribe(d=>{
      this.resetForm(myform);
      this.refreshData();
      this.toast.success('Success', 'Record Saved');
      // console.log('save success');
    });
  }

  updateCustomer(myform:NgForm){
    this.cusService.updateCustomer().subscribe(d=>{
      this.resetForm(myform);
      this.refreshData();
      this.toast.warning('Success', 'Record Updated');
      // console.log('update success');
    });
  }

  resetForm(myform:NgForm){
    myform.form.reset();
    this.cusService.customerData=new Customer();
  }

  refreshData(){
    this.cusService.getCustomers().subscribe(res=>{
      this.cusService.listCustomer=res;
    });
  }

}

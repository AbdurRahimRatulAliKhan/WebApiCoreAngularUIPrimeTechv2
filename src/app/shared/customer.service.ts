import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, Quantity } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private myhttp:HttpClient) { }
  customerInvoicesUrl:string='https://localhost:7023/api/CustomerInvoices';
  customerInvoiceQuantitiesUrl:string='https://localhost:7023/api/CustomerInvoiceQuantities';

  listCustomer:Customer[]=[]; //For Getting Data EmployeeList
  listQuantity:Quantity[]=[];

  customerData:Customer=new Customer(); //for post data / Insert data

  saveCustomer()
  {
    return this.myhttp.post(this.customerInvoicesUrl,this.customerData);
  }
  updateCustomer()
  {
    return this.myhttp.put(`${this.customerInvoicesUrl}/${this.customerData.id}` ,this.customerData);
  }
  getCustomers():Observable<Customer[]>
  {
    return this.myhttp.get<Customer[]>(this.customerInvoicesUrl);
  }
  getQuantities():Observable<Quantity[]>
  {
    return this.myhttp.get<Quantity[]>(this.customerInvoiceQuantitiesUrl);
  }
  deleteCustomer(id:number)
  {
    return this.myhttp.delete(`${this.customerInvoicesUrl}/${id}`);
  }
}

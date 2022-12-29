export class Customer {
    id:number=0;
    firstName:string;
    lastName: string='';
    email: string='';
    age: number;
    doj: any;
    gender: string='male';
    isMarried: number;
    isActive: number;
    description: string;
    quantityID: number=0;
    quantity: number=0;
}

export class Quantity {
    id:number=0;
    quantity: number=0;
  }
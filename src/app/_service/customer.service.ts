import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Customer } from '../_model/customer';


@Injectable()
export class CustomerService{

    constructor(private http:Http){}

    createCustomer(customer: Customer){
        return this.http.post('',customer).map((response: Response) => response.json());
    }

    getAllCustomers(){
        return this.http.get('').map((response: Response)=>response.json());
    }

    getById(id: number){
        return this.http.get(''+id).map((response: Response)=>response.json());
    }

    updateCustomer(customer: Customer){
        return this.http.put('', customer).map((response: Response) => response.json());
    }

    deleteCustomer(id: number){
        return this.http.delete(''+id).map((response: Response)=>response.json());
    }

}
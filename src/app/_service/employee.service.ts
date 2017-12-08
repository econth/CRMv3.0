import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Employee } from '../_model/employee';


@Injectable()
export class EmployeeService{

    constructor(private http:Http){}

    createEmployee(employee: Employee){
        return this.http.post('',employee).map((response: Response) => response.json());
    }

    getAllEmployees(){
        return this.http.get('../assets/data/employees.json').map((response: Response)=>response.json());
    }

    getById(id: number){
        return this.http.get(''+id).map((response: Response)=>response.json());
    }

    updateEmployee(employee: Employee){
        return this.http.put('', employee).map((response: Response) => response.json());
    }

    deleteEmployee(id: number){
        return this.http.delete(''+id).map((response: Response)=>response.json());
    }

}
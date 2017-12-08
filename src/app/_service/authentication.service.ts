import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService{

    _data: any;

    constructor(private http:Http,
                private router:Router){}

   
    login(){
        // this.http
        // .get('../assets/data/user.json')
        // .map(x => x.json() )
        // .map( (data) => 
        //   this._data = data
        // )
        // return this._data;

        return this.http.get('../assets/data/customers.json').map(res => res.json());
    }

    logout(){
        this.router.navigate(['/login']);
    }
}


   

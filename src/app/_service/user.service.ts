import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../_model/user';


@Injectable()
export class UserService{

    constructor(private http:Http){}

    createUser(user: User){
        return this.http.post('',user).map((response: Response) => response.json());
    }

    getAllUsers(){
        return this.http.get('').map((response: Response)=>response.json());
    }

    getById(id: number){
        return this.http.get(''+id).map((response: Response)=>response.json());
    }

    updateUser(user: User){
        return this.http.put('',user).map((response: Response) => response.json());
    }

    deleteUser(id: number){
        return this.http.delete(''+id).map((response: Response)=>response.json());
    }

}
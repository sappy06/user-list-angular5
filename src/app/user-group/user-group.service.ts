import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from '../app.constants';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class UserService {
 
 	public user;

    constructor(private http:HttpClient,  private configuration: Configuration) {}
 
    // Uses http.get() to load data from a single API endpoint
    getUsers() {
        return this.http.get(this.configuration.serverWithApiUrl + '?results=18');
    }

    setUser(value) {
    	console.log(value);
    	this.user = value;
    }

    getUser() {
    	this.user;
    }
}
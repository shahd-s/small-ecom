import { environment } from './../environments/environment';
import { Component } from '@angular/core';
import {  NgZone } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Observable} from 'rxjs';
import { Http, Response, Headers } from '@angular/http'; 
import { UserSign } from './UserSign';
import { Injectable } from '@angular/core';  
  
@Injectable()  
export class WebService{  
    baseUrl = environment.baseUrl;
    private meow: any;
    username: string;
     admin: boolean;

    constructor(private http: Http){}  
  

    init(){
        return this.http.get(this.baseUrl +'index').toPromise();
    }


    getCustProd(){
        return this.http.get(this.baseUrl+ 'CustHome').toPromise();
    }

    changeStatus(User: UserSign){
        return this.http.post(this.baseUrl+'inActiveSmapy',JSON.stringify(User), 
        { 
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
    }
    register(User: UserSign){
        return this.http.post(this.baseUrl+ 'signup',JSON.stringify(User), 
        { 
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
    }
     async getAllProdsAdmin(){
          return this.http.get(this.baseUrl+'AdminHome').toPromise().then(data =>  { 
            let res = data.json();
            this.meow= res;
            console.log("got data from service",res );
                
            }).catch( error => console.log("nop",error)); 
            
    }

    getMeow(){
        return this.meow;
    }

    logIn(usernamee: string, passwordd: string){
        class Message{
            username: string;
            password: string;
        }
    
           var h = new Message();
           h.username =  usernamee;
           h.password =  passwordd;
    
            
          
     
    
    return this.http.post(this.baseUrl+'login',JSON.stringify(h), { 
     headers: new Headers({ 'Content-Type': 'application/json' }) });
    }


}  
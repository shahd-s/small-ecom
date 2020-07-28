import { UserSign } from './../UserSign';
import { WebService } from './../web.service';
import { Component, OnInit } from '@angular/core'; 
import {  NgZone } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Observable} from 'rxjs';
import { Http, Response, Headers } from '@angular/http'; 
import {ActivatedRoute, Params, Router} from '@angular/router'; 

@Component({
  selector: 'app-cust-home',
  templateUrl: './cust-home.component.html',
  styleUrls: ['./cust-home.component.css']
})
export class CustHomeComponent implements OnInit {

   constructor(private ser: WebService) { 
    

     
  }

  custInfo: any;
  custinf: any;
  orders: any;
  products: any;
  noOrders: string;
   ngOnInit() {
     this.getInfo();
    console.log("App ready to start with info:", this.custinf)
    this.getProds()
    if(this.orders==null)
    console.log("you don't have any orders")
    else
    console.log("what you have: orderse ", this.orders, "what you have prods: ", this.products)
  }

  getProds(){
    if (this.custinf.productorders.length == 1 && this.custinf.productorders[0].productID=="no orders")
    {this.orders=null;
      this.noOrders="You haven't made any orders yet!"
    }
    else
    {this.orders=this.custinf.productorders;
    this.products=this.custinf.products;
  }

  }
  getInfo(){
    var localmew = this.ser.getMeow();
    for (let index = 0; index < localmew.length; index++) {
      if (localmew[index].cust.userName == this.ser.username){
       this.custinf=localmew[index];
       return;
      }
      
    }

    return -1;
  }


}

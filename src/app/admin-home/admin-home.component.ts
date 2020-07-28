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
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private ser: WebService, private router: Router) { }

  allProds:any;
  usernameStatus: string;
  statarr: string[] = ["Active", "Inactive"];
  statint;
  statindex:number;
  first:boolean = true;
  admin:boolean;
  ngOnInit() {
    //getting all products
    if(this.ser.admin){
    this.allProds=this.ser.getMeow(); 
    this.cleanProdArray();
    console.log("From admin home, after cleaning", this.allProds)
    }else
    this.router.navigate(['/invalidAccess']);
  }

  
  checkValue(event: any, u: string, s: string){
    if(this.first){
    if(s=="Active")
    {this.statint=0;
      this.statindex=0;
    console.log("this cust, ", u, "is currently ", s, " you want to make", this.statarr[Number(!this.statint)])}
    else
    {this.statint =1;
      this.statindex=1;
      console.log("this cust, ", u, "is currently ", s, " you want to make", this.statarr[Number(!this.statint)])}
this.first=false;
    }
     
      this.statint=!this.statint
      this.statindex=this.statint? 1:0;
      console.log("changing " , u, " to ", this.statarr[Number(this.statint)]);
      this.statint?this.changeStatusInactive(u): this.changeStatusActive(u);
   
     this.updateUIStat(u);
     
  
 }
 updateUIStat(u){
  for (let index = 0; index < this.allProds.length; index++) {
    if (this.allProds[index].cust.userName == u){
      this.allProds[index].cust.status=this.statarr[this.statindex];
      //console.log("changed", this.allProds[index].cust.userName, " to: FROM FUNCTION: ", this.allProds[index].cust.Status)
    }
  }
 }
  changeStatusActive( usernamee: string){
    let meow = new UserSign();
    meow.username=usernamee;
    meow.status="Active";
    this.ser.changeStatus(meow).subscribe(res=>{console.log("changed spamy? active",res)});
    
  }
  changeStatusInactive( usernamee: string){
    let meow = new UserSign();
    meow.username=usernamee;
    meow.status="Inactive";
    this.ser.changeStatus(meow).subscribe(res=>{console.log("changed spamy? inactive",res)});
    
  }
  cleanProdArray(){
    

    for (let index = 0; index < this.allProds.length; index++) {
      if (this.allProds[index].productorders.length == 1 && this.allProds[index].productorders[0].productID=="no orders")
      {
        this.allProds[index].productorders=null;
        this.allProds[index].products=null;
    }
      
    }
  }
   
}

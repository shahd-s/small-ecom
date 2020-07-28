import { UserSign } from './UserSign';
import { WebService } from './web.service';
import { Component, ModuleWithComponentFactories } from '@angular/core';
import {  NgZone } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Observable} from 'rxjs';
import { Http, Response, Headers } from '@angular/http'; 
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LogInComponent{
     
constructor( private router: Router, private ser: WebService){
    
    let ha=this.ser.init();
    
}


//Navigation booleans
 register: boolean = false;
 login: boolean=true;
 customerHome: boolean = false;
 AdminHome: boolean = false;


 //User boolean
 admin: boolean = false;

 usernamee: string;
 passwordd: string;

 //sign up info
 User: UserSign = new UserSign();



 async LogIn(){
     
    this.ser.logIn(this.usernamee,this.passwordd).subscribe(async res=>{
      
    if(res.text() == "fail")
    console.log("ha. loser") //potentially redirect to login failed
    else
    {
    
    this.register=false;
        //will call service to get products for all users. 
            //Service will store in meow for the adminHome component to access
            await this.ser.getAllProdsAdmin();
    if(res.text() == "Customer")
    {
        this.ser.admin=false;
        //need to show customer home
        console.log("hey customer! here's res:", res.text(), "and here's you? ", this.usernamee)
        this.ser.username=this.usernamee;
        
        this.ser.getCustProd().then(data =>  { 
        let res = data.json();

        console.log("got data customer:",res );
    
}).catch( error => console.log("noooop",error));

    this.router.navigate(['/custHome']);

    }
    else
        if (res.text() == "Admin")
        {   
            this.ser.admin=true;
            //Debugger output
            console.log("hey admin!")
            
            

            //Navigate to adminHome
            this.router.navigate(['/adminHome']);
    
        }
}


   
});
         


 }


 goRegister(ad:boolean){
    this.register= true;
    this.login=false;
    this.AdminHome=false;
    this.customerHome=false;

    this.admin=ad;
 }

 goRegister1(){
           
    if (this.admin)
   {
    this.ser.admin=true;
        console.log("admin trying to regiser", this.User)

        this.User.button="adm";
        this.ser.register(this.User).subscribe(res=>{console.log(res)});
            
        this.login=true;
        this.register=false;
        this.customerHome=false;
        this.AdminHome=false;
    
    
    }
    else
    {
        this.ser.admin=false;
       
        console.log("user trying to regiser", this.User)

        this.User.button="cust";
        this.ser.register(this.User).subscribe(res=>{console.log(res)});

        this.login=true;
        this.register=false;
        this.customerHome=false;
        this.AdminHome=false;

    }
 }

}
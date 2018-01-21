import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { NgModel,FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string="";
password:string="";
errormessage:string="";
  constructor(private router:Router) { }

  ngOnInit() {
  }

  login()
  {
    console.log("login");
    console.log(this.username);
    console.log(this.password);
    console.log("login");
    
    if(this.username=="hdfc" || this.username=="icici")
    {
      if(this.username=="hdfc" && this.password=="123")
      {
        this.router.navigate(['/home']);
      }
      else
      {
        this.errormessage="invalid password!"
      }
      if(this.username=="icici" && this.password=="456")
      {
        this.router.navigate(['/home1']);
      }
      else
      {
        this.errormessage="invalid password!"
      }
    }
    else
      {
        this.errormessage="invalid username!"
      }
      alert(this.errormessage);
  }

}

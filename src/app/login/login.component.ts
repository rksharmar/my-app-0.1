import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { NgModel,FormsModule  } from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives/ng_form';


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

  login(loginForm:NgForm)
  {
    console.log(loginForm.value.Username);
    
    
    if(loginForm.value.Username=="hdfc" || loginForm.value.Username=="icici")
    {
      if(loginForm.value.Username=="hdfc" && loginForm.value.Password=="123")
      {
        this.router.navigate(['/home']);
      }
      else
      {
        this.errormessage="invalid password!"
      }
      if(loginForm.value.Username=="icici" && loginForm.value.Password=="icici")
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
      
  }

}

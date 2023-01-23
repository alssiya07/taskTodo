import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../serivces/task.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service:TaskService,private router:Router) {

  }
  loginForm = new FormGroup(
    {
      "username": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required])
    }
  )
  get username() {
    return this.loginForm.get("username")
  }
  get password() {
    return this.loginForm.get("password")
  }
  authenticate(){
    let data=this.loginForm.value
    this.service.getToken(data).then(res => res.json()).then(data =>{
      let token=data.token
      localStorage.setItem("token","Token "+token)
      this.router.navigateByUrl("home")
    })
    
  }
  
}
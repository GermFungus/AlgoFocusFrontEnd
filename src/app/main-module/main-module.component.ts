import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../Services/registration/registration.service'
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-main-module',
  templateUrl: './main-module.component.html',
  styleUrls: ['./main-module.component.scss']
})
export class MainModuleComponent implements OnInit {
  public step = 1;
  public looper = [1];
  public counter = 1;
  public userDetails;
  public phoneState = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private RegistrationService: RegistrationService
    ){}
    register(user : NgForm){
      if(!user || !user.valid) return;
      var userToSend ={
        user:user.form.value
      }
      console.log(userToSend);
      this.RegistrationService.register(userToSend).then((result:any)=>{
        if(result[0] === 'sucess'){
          this.userDetails=userToSend;
          console.log(this.userDetails);
          this.step = 2;
        }
        if(result[0] === 'Incomplete'){
          this.phoneState = false;
        }
      }).catch((err)=>{
        err = err || new Object();
      });
    }
    continue(){
      this.step = this.step + 1;
    }
    adder()
    {
      this.counter = this.counter+1;
      this.looper.push(this.counter);
    }

  ngOnInit() {}
}

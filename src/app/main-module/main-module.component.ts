import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../Services/registration/registration.service'
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { ApiparserService } from '../Services/apiparser/apiparser.service';

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
  public ageRes = false;
  public completeData : any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private RegistrationService: RegistrationService,
    private ApiParser : ApiparserService
    ){}
    async fetchData(){
        let data = await this.ApiParser.hit('/user/data', 'get', {});
        return data;
    }

    async register(user : NgForm){
      if(!user || !user.valid) return;
      var userToSend ={
        user:user.form.value
      }
      var dob = new Date(user.form.value.dp.year , user.form.value.dp.month , user.form.value.dp.day);
      var today = new Date();
      var age = today.getFullYear() - dob.getFullYear();
      var month = today.getMonth(); - dob.getMonth();
      if(month < 0 || (month === 0 && (today.getDate() < dob.getDate()) )){
        --age;
      }
      if(age < 18 ){
        this.ageRes = true;
        return 0;
      }
      else {
        this.ageRes = false;
      console.log(userToSend);
      this.RegistrationService.register(userToSend).then(async (result:any)=>{
        if(result[0] === 'sucess'){
          this.userDetails=userToSend;
          console.log(this.userDetails);
          this.step = 2; 
          this.completeData = await this.fetchData();
          
        }
        if(result[0] === 'Incomplete'){
          this.phoneState = false;
        }
      }).catch((err)=>{
        err = err || new Object();
      });
    }
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

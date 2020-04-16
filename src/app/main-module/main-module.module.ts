import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MainModuleRoutingModule } from "./main-module.routing"
import { MainModuleComponent } from './main-module.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MainModuleComponent],
  imports: [
    CommonModule,
    FormsModule,
    MainModuleRoutingModule,
    NgbModule
  ]
})
export class MainModuleModule { }

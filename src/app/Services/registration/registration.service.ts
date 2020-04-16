import { Injectable } from '@angular/core';
import { ApiparserService } from '../apiparser/apiparser.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  constructor(private parser: ApiparserService) { }

  register(params){
    return this.parser.hit('/user/register', 'post', {params: params});
  }
}

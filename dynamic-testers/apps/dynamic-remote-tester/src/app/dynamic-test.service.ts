import { Injectable } from '@angular/core';
import { ApiVersion2Service } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DynamicTestService {

  makeAPICall = false;

  constructor(public ApiVersion2Service: ApiVersion2Service) {}

  logOutString = (log: string) => {
    if(this.makeAPICall) {
      this.ApiVersion2Service.get('www.google.com');
    }
    console.log(log);
  }
}

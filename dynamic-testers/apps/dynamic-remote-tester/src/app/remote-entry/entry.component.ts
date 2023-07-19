import { Component, OnInit } from '@angular/core';
import { DynamicTestService } from '../dynamic-test.service';

@Component({
  selector: 'dynamic-testers-dynamic-remote-tester-entry',
  template: `<dynamic-testers-nx-welcome></dynamic-testers-nx-welcome>`,
})
export class RemoteEntryComponent implements OnInit {
  constructor(public dynamicTestService: DynamicTestService) { }

  /**
  * Angular lifecycle method. Called on component initialization
  */
  ngOnInit(): void {
    this.dynamicTestService.logOutString('testing the service');
  }
}

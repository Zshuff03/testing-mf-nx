import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { DynamicTestService } from '../dynamic-test.service';
import { ApiVersion2Service } from '../api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), HttpClientModule],
  providers: [DynamicTestService, ApiVersion2Service, HttpClient],
})
export class RemoteEntryModule {}

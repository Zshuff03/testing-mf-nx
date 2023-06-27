import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteEntryComponent } from './entry.component';
import { RouterModule } from '@angular/router';
import { remoteRoutes } from './entry.routes';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
  exports: [RemoteEntryComponent],
})
export class RemoteEntryModule {}

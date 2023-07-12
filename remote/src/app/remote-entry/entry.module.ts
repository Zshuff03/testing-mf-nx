import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteEntryComponent } from './entry.component';
@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule],
  providers: [],
  bootstrap: [RemoteEntryComponent]
})
export class RemoteEntryModule {}
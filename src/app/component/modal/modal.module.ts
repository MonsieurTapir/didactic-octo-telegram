import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [ModalComponent],
  exports: [ModalComponent],
  imports: [CommonModule, BrowserAnimationsModule, OverlayModule],
})
export class ModalModule {}

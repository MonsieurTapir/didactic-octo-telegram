import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FadeDirective} from './fade.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [FadeDirective],
  exports: [FadeDirective],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class FadeDirectiveModule { }

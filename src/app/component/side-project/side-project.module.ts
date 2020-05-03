import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideProjectComponent } from './side-project.component';
import {ModalModule} from '../modal/modal.module';



@NgModule({
  declarations: [SideProjectComponent],
  exports: [SideProjectComponent],
    imports: [
        CommonModule,
        ModalModule
    ]
})
export class SideProjectModule { }

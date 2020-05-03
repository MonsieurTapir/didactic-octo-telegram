import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsPageComponent } from './projects-page.component';
import {SideProjectModule} from '../../component/side-project/side-project.module';
import {FadeDirectiveModule} from '../../directive/fade-directive.module';
import {ModalModule} from '../../component/modal/modal.module';



@NgModule({
  declarations: [ProjectsPageComponent],
    imports: [
        CommonModule,
        SideProjectModule,
        FadeDirectiveModule,
        ModalModule
    ]
})
export class ProjectsPageModule { }

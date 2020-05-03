import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import {ColorPickerModule} from 'ngx-color-picker';
import {MenuModule} from '../../component/menu/menu.module';
import {FadeDirectiveModule} from '../../directive/fade-directive.module';
import {FooterModule} from '../../component/footer/footer.module';



@NgModule({
  declarations: [HomePageComponent],
    imports: [
        CommonModule,
        ColorPickerModule,
        MenuModule,
        FadeDirectiveModule,
        FooterModule
    ]
})
export class HomePageModule { }

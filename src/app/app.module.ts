import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavbarModule} from './component/navbar/navbar.module';
import {HomePageModule} from './page/home-page/home-page.module';
import {PageWithNavbarComponent} from './layout/page-with-navbar/page-with-navbar.component';
import {ProjectsPageModule} from './page/projects-page/projects-page.module';
import {HttpClientModule} from '@angular/common/http';
import {FooterModule} from './component/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    PageWithNavbarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarModule,
        HomePageModule,
        ProjectsPageModule,
        HttpClientModule,
        FooterModule
    ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

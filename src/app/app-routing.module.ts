import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './page/home-page/home-page.component';
import {ProjectsPageComponent} from './page/projects-page/projects-page.component';
import {PageWithNavbarComponent} from './layout/page-with-navbar/page-with-navbar.component';
import {CurriculumPageComponent} from './page/curriculum-page/curriculum-page.component';

const routes: Routes = [
  { path: 'projects', redirectTo: 'pages/projects'},
  { path: 'curriculum', redirectTo: 'pages/curriculum'},
  { path: 'pages', component: PageWithNavbarComponent,
    children: [
      { path: 'projects', component: ProjectsPageComponent, pathMatch: 'full'},
      { path: 'curriculum', component: CurriculumPageComponent, pathMatch: 'full'},
    ]
  },
  {
    path: '', component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

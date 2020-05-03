import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HomeModel} from '../model/home.model';
import {Observable} from 'rxjs';
import {SideProjectModel} from '../model/side-project.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) {
  }

  fetchHome(): Observable<HomeModel> {
    return this.http.get<HomeModel>('/assets/home.json');
  }

  fetchProjects(): Observable<SideProjectModel[]>{
    return this.http.get<SideProjectModel[]>('/assets/projects.json');
  }
}

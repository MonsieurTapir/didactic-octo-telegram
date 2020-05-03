import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../service/content.service';
import {Observable} from 'rxjs';
import {HomeModel} from '../../model/home.model';

@Component({
  selector: 'tapir-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  model$: Observable<HomeModel>;
  constructor(private contentService: ContentService) {
    this.model$ = contentService.fetchHome();
  }

  ngOnInit(): void {
  }
}

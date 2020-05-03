import { Component, OnInit } from '@angular/core';
import {SideProjectModel} from '../../model/side-project.model';
import {ContentService} from '../../service/content.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'tapir-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  projects$: Observable<SideProjectModel[]>;
  imageShown: string | undefined = undefined;
  constructor(private contentService: ContentService) {
    this.projects$ = contentService.fetchProjects();
  }

  ngOnInit(): void {
  }

  showImage(url: string) {
    this.imageShown = url;
  }
}

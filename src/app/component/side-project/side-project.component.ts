import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SideProjectModel} from '../../model/side-project.model';

@Component({
  selector: 'tapir-side-project[model]',
  templateUrl: './side-project.component.html',
  styleUrls: ['./side-project.component.scss']
})
export class SideProjectComponent implements OnInit {
  @Input() model: SideProjectModel;
  @Output() imageClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  clickedImage(s: string) {
    this.imageClicked.emit(s);
  }
}

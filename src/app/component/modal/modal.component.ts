import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { filter, take, takeUntil, tap } from 'rxjs/operators';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'tapir-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('slideContent', [
      state('void', style({ transform: ' scale(0.1)', opacity: 0 })),
      state('enter', style({ opacity: 1 })),
      transition('* => *', animate('200ms ease-in-out')),
    ]),
  ],
})
export class ModalComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() show = false;
  @Input() withCloseBtn = true;
  @ViewChild('modal') modalTemplate: TemplateRef<any>;
  modalPortal: TemplatePortal;
  modalOverlay: OverlayRef;
  @Output() backdropClick = new EventEmitter();

  animationState: 'void' | 'enter' | 'leave' = 'enter';
  private unsubscribe$ = new Subject();

  constructor(private _viewContainerRef: ViewContainerRef, private overlay: Overlay, private router: Router) {
    router.events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationStart),
        tap(() => this.modalOverlay.detach()),
        take(1)
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.modalPortal = new TemplatePortal(this.modalTemplate, this._viewContainerRef);
    this.modalOverlay = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerVertically().centerHorizontally(),
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
    this.modalOverlay
      .backdropClick()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((_) => this.close());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.show && !changes.show.isFirstChange()) {
      if (this.show) {
        this.modalOverlay.attach(this.modalPortal);
      } else {
        if (this.modalOverlay.hasAttached()) {
          this.modalOverlay.detach();
        }
      }
    }
  }
  close() {
    this.backdropClick.emit();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }
}

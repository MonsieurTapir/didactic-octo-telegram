import {AfterViewInit, Directive, ElementRef, OnChanges} from '@angular/core';
import {animate, AnimationBuilder, AnimationPlayer, keyframes, style} from '@angular/animations';

@Directive({
  selector: '[tapirFade]'
})
export class FadeDirective  implements AfterViewInit {
  private viewInitialized = false;
  private player: AnimationPlayer | undefined;

  constructor(private builder: AnimationBuilder, private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.viewInitialized = true;
    this.animate();
  }

  private animate() {
    if (this.player) {
      this.player.destroy();
    }
    const metadata = animate('0.3s', keyframes([
      style({opacity: 0, }),
      style({opacity: 1, }),
    ]));
    const factory = this.builder.build(metadata);
    const player = factory.create(this.el.nativeElement);
    player.play();
  }
}


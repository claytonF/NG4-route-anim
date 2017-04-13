import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { routeAnimation } from '../app.animations';
import { AnimationService } from '../app.animation.service';

@Component({
  selector: 'page3-root',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
  animations:[routeAnimation]
})
export class Page3Component implements OnInit {
  @HostBinding("@routing") routing 
  @HostBinding('style.display') display = "block";
  title = "page 3";
  _animationServiceEventsSubscription: any;
  
  constructor(private _animationService: AnimationService) {}

  ngOnInit() {
    this.routing = this._animationService.animationDirection();
    this._animationServiceEventsSubscription = this._animationService.emitCurrentDirection.subscribe((direction: any) => {
      this.routing = direction;
    });
  }

  routeFn(direction:string,nextRoute:string) {
    return this._animationService.routingService(direction,nextRoute);
  }

}

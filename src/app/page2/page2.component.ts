import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { routeAnimation } from '../app.animations';
import { AnimationService } from '../app.animation.service';

@Component({
  selector: 'page2-root',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  animations:[routeAnimation]
})
export class Page2Component implements OnInit {
  @HostBinding("@routing") routing 
  @HostBinding('style.display') display = "block";
  title = "page 2";
  _animationServiceEventsSubscription: any;
  
  constructor(private _animationService: AnimationService) {}

  ngOnInit() {
    this.routing = this._animationService.animationDirection();
    console.log(this.routing);

    this._animationServiceEventsSubscription = this._animationService.emitCurrentDirection.subscribe((direction: any) => {
      this.routing = direction;
    });
  }

  back(nextRoute:string) {
    return this._animationService.back(nextRoute);
  }

  forward(nextRoute:string) {
    return this._animationService.forward(nextRoute);
  }

}

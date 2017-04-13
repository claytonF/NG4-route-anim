import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { routeAnimation } from '../app.animations';
import { AnimationService } from '../app.animation.service';

@Component({
  selector: 'page1-root',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  animations:[routeAnimation]
})
export class Page1Component implements OnInit {
  //routing:string;
  @HostBinding("@routing") routing 
  /* how the fu*k do I update this once it's defined on the page? - this is still the crux of the problem. 
  I can change the value of 'routing' but it changes a different instance of the variable, 
  not the instance bound to the host so the exit animation doesn't match the new value of 'routing' if it has changed. */

  @HostBinding('style.display') display = "block";
  title = "page 1";
  
  constructor(private _animationService: AnimationService) {}

  ngOnInit() {
    this.routing = this._animationService.animationDirection();
    console.log(this.routing);
  }

  back() {
    return this._animationService.back();
  }

  forward() {
    return this._animationService.forward();
  }

}

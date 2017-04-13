import { Component, OnInit, HostBinding } from '@angular/core';
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
  //routing:string;
  @HostBinding('@routing') routing
  @HostBinding('style.display') display = "block";
  title = "Page 2";
  
  constructor(private _animationService: AnimationService) {}

  ngOnInit() {
    this.routing = this._animationService.animationDirection();
  }

  back() {
    return this._animationService.back();
  }

  forward() {
    return this._animationService.forward();
  }

}

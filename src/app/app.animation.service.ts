import { HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class AnimationService {

  //@HostBinding('@routing') routing = "none";

  routing:string = "forward";
  constructor(private _router:Router) {}

  animationDirection() {
    
      return this.routing;
  }

  back() {
      this.routing = "back";
      this._router.navigateByUrl('/')
  }

  forward() {
      this.routing = "forward";
      console.log(this.routing)
      this._router.navigateByUrl('/page2')
  }
}
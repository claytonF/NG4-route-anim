import { HostBinding, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class AnimationService {

  emitCurrentDirection: EventEmitter<Object> = new EventEmitter<Object>();
  routing:string;

  constructor(private _router:Router) {}

  animationDirection() {
      return this.routing;
  }

  back(nextRoute) {
      this.routing = "back";
      this.emitCurrentDirection.emit(this.routing);
      setTimeout(()=>{ // timeoiut pushes this code to the back of the event queue
          this._router.navigateByUrl(nextRoute)
      });
  }

  forward(nextRoute) {
      this.routing = "forward";
      this.emitCurrentDirection.emit(this.routing);
      console.log(nextRoute)
      setTimeout(()=>{ // timeoiut pushes this code to the back of the event queue
          this._router.navigateByUrl(nextRoute)
      });
  }
}
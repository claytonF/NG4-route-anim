import { Component, OnInit, HostBinding } from '@angular/core';
import { routeAnimation } from '../app.animations';


@Component({
  selector: 'page3-root',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
  animations:[routeAnimation]

})
export class Page3Component implements OnInit {
  title = "Page 3";
  @HostBinding('@back')
  @HostBinding('style.display') display = "block";

  constructor() { }

  ngOnInit() {
  }

}

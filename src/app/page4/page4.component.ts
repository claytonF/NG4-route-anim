import { Component, OnInit, HostBinding } from '@angular/core';
import { routeAnimation } from '../app.animations';


@Component({
  selector: 'page4-root',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css'],
  animations:[routeAnimation]

})
export class Page4Component implements OnInit {
  title = "page 4"
  @HostBinding('@back')
  @HostBinding('style.display') display = "block";
  constructor() { }

  ngOnInit() {
  }

}

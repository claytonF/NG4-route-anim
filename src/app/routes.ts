import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

export const APP_ROUTES = [{
    path: '',
    component: Page1Component,
    animation: {
      value: 'page1',
    }
  }, 
  {
    path: 'page2',
    component: Page2Component,
    animation: {
      value: 'page2',
    }
  },
  {
    path: 'page3',
    component: Page3Component,
    animation: {
        value: 'page3'
    }
  },
  {
      path: 'page4',
      component: Page4Component,
      animation: {
          value: 'page4'
      }
  }
];
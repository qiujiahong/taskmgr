import {trigger, state, transition, style, animate} from '@angular/animations';

export const slideToRight = trigger('routeAnim', [
  // 没状态，一开始不存在
  state('void', style ( {  'position': 'fixed', 'width': '100%', 'height': '80%' })),
  state('*', style ( {  'position': 'fixed', 'width': '100%', 'height': '80%' })),
  transition('void => *', [
    style({transform: 'translateX(-100%)'}),
    animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
  ]),
  transition('* => void', [
    style({transform: 'translateX(0%)'}),
    animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
  ]),
  transition('out => in', animate('100ms ease-out'))
])

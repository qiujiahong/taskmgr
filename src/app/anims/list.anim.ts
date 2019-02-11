import {trigger, stagger , state, transition, style, animate , group, query} from '@angular/animations';

export const listAnimation = trigger('listAnim', [
  transition('* => *', [
    query(':enter', style({ opacity: 0}),  {optional: true }),
    query(':enter', stagger(100, [
      animate('1s', style({opacity: 1}))
    ]),  {optional: true }),
    query(':leave', style({ opacity: 1}),  {optional: true }), // leave 不能生效不知道为什么
    query(':leave', stagger(100, [
      animate('1s', style({opacity: 0}))
    ]),  {optional: true })
  ])
])
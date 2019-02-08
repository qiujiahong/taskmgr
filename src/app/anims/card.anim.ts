import {trigger, state, transition, style, animate} from '@angular/animations';

export const cardAnim = trigger('card', [
  state('out', style ( { transform: 'scale(1)', 'box-shadow': 'none'})),
  state('hover', style ( { transform: 'scale(1.02)', 'box-shadow': '3px 3px 5px 6px #ccc'})),
  // state('out', style ( { transform: 'scale(1)' })),
  // state('hover', style ( { transform: 'scale(1.1)'})),
  transition('out => hover', animate('100ms ease-in')),
  transition('hover => out', animate('100ms ease-out'))
])

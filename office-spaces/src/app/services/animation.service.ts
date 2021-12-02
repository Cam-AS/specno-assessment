import {
  trigger,
  transition,
  style,
  animate,
  AnimationTriggerMetadata,
} from '@angular/animations';

export class AnimationService {
  public static sideInOut(): AnimationTriggerMetadata {
    return trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', zIndex: 10 }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        style({ zIndex: 9 }),
        animate('200ms ease-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]);
  }
}

import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-avatar',
  standalone: true,
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'ui-avatar-host',
    '[class.ui-avatar--sm]': 'size() === "sm"',
    '[class.ui-avatar--md]': 'size() === "md"',
    '[class.ui-avatar--lg]': 'size() === "lg"',
  },
})
export class Avatar {
  src = input<string>();
  initials = input<string>('');
  size = input<'sm' | 'md' | 'lg'>('md');
  alt = input<string>('Avatar');
}

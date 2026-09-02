import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-message-bubble',
  standalone: true,
  templateUrl: './message-bubble.html',
  styleUrl: './message-bubble.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'ui-message-bubble-host',
    '[class.ui-message-bubble--start]': 'align() === "start"',
    '[class.ui-message-bubble--end]': 'align() === "end"',
  },
})
export class MessageBubble {
  align = input<'start' | 'end'>('start');
  variant = input<'primary' | 'neutral'>('neutral');
  tail = input<boolean>(true);
  timestamp = input<string>();
}

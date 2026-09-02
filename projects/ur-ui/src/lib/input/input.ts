import { Component, input, model, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-input',
  standalone: true,
  templateUrl: './input.html',
  styleUrl: './input.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'ui-input-host',
    '[class.ui-input--disabled]': 'disabled()',
    '[class.ui-input--error]': 'error()',
  },
})
export class Input {
  value = model<string>('');
  label = input<string>();
  placeholder = input<string>('');
  type = input<string>('text');
  disabled = input<boolean>(false);
  error = input<string>();

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
  }
}

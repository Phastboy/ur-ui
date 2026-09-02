import { Component, Directive, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'ui-list',
  standalone: true,
  templateUrl: './list.html',
  styleUrl: './list.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ui-list--bordered]': 'bordered()',
    '[class.ui-list--dividers]': 'dividers()',
    '[class.ui-list--padding]': 'padding()',
    '[class.ui-list--radius]': 'radius()',
  },
})
export class List {
  bordered = input<boolean>(true);
  dividers = input<boolean>(true);
  padding = input<boolean>(true);
  radius = input<boolean>(true);
}

@Directive({
  selector: '[uiListItem]',
  standalone: true,
  host: { class: 'ui-list-item' },
})
export class ListItem {}

@Directive({
  selector: '[uiListItemStart]',
  standalone: true,
  host: { class: 'ui-list-item-start' },
})
export class ListItemStart {}

@Directive({
  selector: '[uiListItemContent]',
  standalone: true,
  host: { class: 'ui-list-item-content' },
})
export class ListItemContent {}

@Directive({
  selector: '[uiListItemTitle]',
  standalone: true,
  host: { class: 'ui-list-item-title' },
})
export class ListItemTitle {}

@Directive({
  selector: '[uiListItemDescription]',
  standalone: true,
  host: { class: 'ui-list-item-description' },
})
export class ListItemDescription {}

@Directive({
  selector: '[uiListItemEnd]',
  standalone: true,
  host: { class: 'ui-list-item-end' },
})
export class ListItemEnd {}

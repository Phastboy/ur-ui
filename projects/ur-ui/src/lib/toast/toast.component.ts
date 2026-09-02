import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ToastService } from './toast.service';
import { LucideCheckCircle, LucideXCircle, LucideInfo } from '@lucide/angular';

@Component({
  selector: 'ui-toaster',
  standalone: true,
  imports: [LucideCheckCircle, LucideXCircle, LucideInfo],
  templateUrl: './toast.component.html',
  styleUrl: './toast.css',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'ui-toaster' },
})
export class ToasterComponent {
  toastService = inject(ToastService);
}

import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastsSignal = signal<Toast[]>([]);
  readonly toasts = this.toastsSignal.asReadonly();

  show(message: string, type: 'success' | 'error' | 'info' = 'info') {
    const id = Math.random().toString(36).substring(2, 9);
    this.toastsSignal.update((toasts) => [...toasts, { id, message, type }]);

    setTimeout(() => {
      this.remove(id);
    }, 3000);
  }

  remove(id: string) {
    this.toastsSignal.update((toasts) => toasts.filter((t) => t.id !== id));
  }
}

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';
import { ToasterComponent } from './toast.component';
import { ToastService } from './toast.service';
import { Component, inject } from '@angular/core';
import { Button } from '../button/button';

@Component({
  standalone: true,
  selector: 'app-toast-story',
  imports: [ToasterComponent, Button],
  providers: [ToastService],
  template: `
    <div style="padding: 20px; display: flex; gap: 10px;">
      <button ui-button (click)="showInfo()">Show Info</button>
      <button ui-button (click)="showSuccess()">Show Success</button>
      <button ui-button (click)="showError()">Show Error</button>
    </div>

    <!-- The toaster component should be placed once at the root of the app -->
    <ui-toaster></ui-toaster>
  `,
})
class ToastStoryComponent {
  toastService = inject(ToastService);

  showInfo() {
    this.toastService.show('This is an informational message.', 'info');
  }

  showSuccess() {
    this.toastService.show('Your action was successful!', 'success');
  }

  showError() {
    this.toastService.show('Something went wrong.', 'error');
  }
}

const meta: Meta<ToastStoryComponent> = {
  title: 'Atoms/Toast',
  component: ToastStoryComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ToastStoryComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<ToastStoryComponent>;

export const Default: Story = {};

import { Meta, StoryObj } from '@storybook/angular-vite';
import { MessageBubble } from './message-bubble';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-message-bubble-story',
  imports: [MessageBubble],
  template: `
    <div
      style="max-width: 400px; padding: 20px; display: flex; flex-direction: column; gap: 16px; background: var(--surface-page); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);"
    >
      <ui-message-bubble align="start" variant="neutral" [tail]="false">
        Hey! How's the UI library coming along?
      </ui-message-bubble>

      <ui-message-bubble align="start" variant="neutral" [tail]="true" timestamp="10:42 AM">
        Are we still doing the demo today?
      </ui-message-bubble>

      <ui-message-bubble align="end" variant="primary" [tail]="true" timestamp="10:45 AM">
        Yes! It's looking great. I just finished the MessageBubble component.
      </ui-message-bubble>
    </div>
  `,
})
class MessageBubbleStoryComponent {}

const meta: Meta<MessageBubbleStoryComponent> = {
  title: 'Atoms/MessageBubble',
  component: MessageBubbleStoryComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<MessageBubbleStoryComponent>;

export const Default: Story = {};

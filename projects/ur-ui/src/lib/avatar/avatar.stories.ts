import { Meta, StoryObj } from '@storybook/angular-vite';
import { Avatar } from './avatar';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-avatar-story',
  imports: [Avatar],
  template: `
    <div style="display: flex; gap: 20px; align-items: center; padding: 20px;">
      <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
        <ui-avatar size="sm" initials="ab"></ui-avatar>
        <span style="font-size: 12px; color: var(--text-secondary)">Small</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
        <ui-avatar size="md" initials="cd"></ui-avatar>
        <span style="font-size: 12px; color: var(--text-secondary)">Medium</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
        <ui-avatar size="lg" initials="ef"></ui-avatar>
        <span style="font-size: 12px; color: var(--text-secondary)">Large</span>
      </div>
    </div>
  `,
})
class AvatarStoryComponent {}

const meta: Meta<AvatarStoryComponent> = {
  title: 'Atoms/Avatar',
  component: AvatarStoryComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AvatarStoryComponent>;

export const Default: Story = {};

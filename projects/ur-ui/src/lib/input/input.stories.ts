import { Meta, StoryObj } from '@storybook/angular-vite';
import { Input } from './input';
import { LucideSearch, LucideEye } from '@lucide/angular';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-input-story',
  imports: [Input, LucideSearch, LucideEye],
  template: `
    <div style="max-width: 300px; padding: 20px; display: flex; flex-direction: column; gap: 20px;">
      <ui-input [label]="'Default Input'" [placeholder]="'Type something...'"></ui-input>

      <ui-input
        [label]="'With Prefix'"
        [placeholder]="'Search...'"
      >
        <svg prefix lucideSearch size="16"></svg>
      </ui-input>

      <ui-input
        [label]="'With Suffix'"
        [placeholder]="'Password'"
        [type]="'password'"
      >
        <svg suffix lucideEye size="16" style="cursor: pointer;"></svg>
      </ui-input>

      <ui-input
        [label]="'Error State'"
        [placeholder]="'Invalid input'"
        [error]="'This field is required'"
      ></ui-input>

      <ui-input [label]="'Disabled'" [placeholder]="'Cannot edit'" [disabled]="true"></ui-input>
    </div>
  `,
})
class InputStoryComponent {}

const meta: Meta<InputStoryComponent> = {
  title: 'Atoms/Input',
  component: InputStoryComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<InputStoryComponent>;

export const Default: Story = {};

import { Meta, StoryObj } from '@storybook/angular-vite';
import {
  List,
  ListItem,
  ListItemStart,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  ListItemEnd,
} from './list';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-list-story',
  imports: [
    List,
    ListItem,
    ListItemStart,
    ListItemContent,
    ListItemTitle,
    ListItemDescription,
    ListItemEnd,
  ],
  template: `
    <div style="max-width: 400px; padding: 20px;">
      <ui-list [bordered]="bordered" [dividers]="dividers" [padding]="padding" [radius]="radius">
        <button uiListItem>
          <div uiListItemStart>
            <div
              style="width: 40px; height: 40px; background: var(--surface-container-high); border-radius: var(--radius-pill);"
            ></div>
          </div>
          <div uiListItemContent>
            <span uiListItemTitle>Alice Smith</span>
            <span uiListItemDescription>Hey, how are you doing today?</span>
          </div>
          <div uiListItemEnd>
            <span style="font-size: var(--font-size-xs);">12:30 PM</span>
          </div>
        </button>

        <button uiListItem>
          <div uiListItemStart>
            <div
              style="width: 40px; height: 40px; background: var(--surface-container-high); border-radius: var(--radius-pill);"
            ></div>
          </div>
          <div uiListItemContent>
            <span uiListItemTitle>Bob Johnson</span>
            <span uiListItemDescription>Did you see the new UI update?</span>
          </div>
          <div uiListItemEnd>
            <span style="font-size: var(--font-size-xs);">Yesterday</span>
          </div>
        </button>

        <button uiListItem class="is-active">
          <div uiListItemStart>
            <div
              style="width: 40px; height: 40px; background: var(--surface-container-high); border-radius: var(--radius-pill);"
            ></div>
          </div>
          <div uiListItemContent>
            <span uiListItemTitle>Design Team</span>
            <span uiListItemDescription>Reviewing the latest mockups...</span>
          </div>
          <div uiListItemEnd>
            <div
              style="width: 8px; height: 8px; background: var(--clr-primary); border-radius: var(--radius-pill);"
            ></div>
          </div>
        </button>
      </ui-list>
    </div>
  `,
})
class ListStoryComponent {
  bordered = true;
  dividers = true;
  padding = true;
  radius = true;
}

const meta: Meta<ListStoryComponent> = {
  title: 'Atoms/List',
  component: ListStoryComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ListStoryComponent>;

export const Default: Story = {
  args: {
    bordered: true,
    dividers: true,
    padding: true,
    radius: true,
  },
};

export const Minimal: Story = {
  args: {
    bordered: false,
    dividers: false,
    padding: true,
    radius: false,
  },
};

import { ChangeDetectionStrategy, Component, HostListener, model, signal } from '@angular/core';
import { Chat } from '../chat/chat';
import { Sidenav } from '../shared/ui/sidenav/sidenav';

@Component({
  selector: 'app-root-chat',
  template: `
    @let _open = open();
    <bm-sidenav [(open)]="open">
      <bmchat-chat class="w-full h-full" />
    </bm-sidenav>
    <button
      class="fixed z-2 bottom-4 right-4 text-gray-950 p-3 bg-white rounded-full shadow-xl/30"
      (click)="open.set(true)"
      [class.hidden]="_open"
    >
      <svg
        class="w-10 h-10 text-gray-950"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  `,
  imports: [Chat, Sidenav],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  open = model(false);
}

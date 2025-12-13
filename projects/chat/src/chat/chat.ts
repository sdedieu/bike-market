import { Component, effect, inject } from '@angular/core';
import { ChatMessagesContainer } from './chat-messages-container';
import { ChatInput } from './chat-input';
import { ChatService } from './chat.service';

@Component({
  selector: 'bmchat-chat',
  host: {
    class: 'flex flex-col justify-between',
  },
  imports: [ChatMessagesContainer, ChatInput],
  template: `
    <bmchat-chat-messages-container [messages]="messages()"></bmchat-chat-messages-container>
    <bmchat-chat-input
      [(inputValue)]="inputValue"
      (onInputSent)="submitMessage($event)"
      (onCancelSent)="cancelLastMessage()"
      [loading]="loading()"
    ></bmchat-chat-input>
  `,
})
export class Chat {
  protected inputValue: string = '';

  private readonly _chatService = inject(ChatService);

  readonly messages = this._chatService.messages;
  readonly loading = this._chatService.isLoading;

  submitMessage(content: string): void {
    this.inputValue = '';
    this._chatService.sendMessage(content);
  }

  cancelLastMessage(): void {
    this._chatService.cancelMessage();
  }
}

import { Injectable } from '@angular/core';

import { io, Socket } from 'socket.io-client';
import { BaseEvent } from '@ag-ui/client';
import { UserMessage } from '../../shared/models/message';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  private socket: Socket = io('http://localhost:3000/');

  readonly events$ = new Observable<BaseEvent>((subscriber) => {
    this.socket.on('event', (event: BaseEvent) => {
      console.log('backend call:', JSON.stringify(event));
      subscriber.next(event);
    });
  });

  sendMessage(userMessage: UserMessage): void {
    this.socket.emit('chat-message', {
      ...userMessage,
      content: userMessage.content(),
    });
  }

  cancelMessage(): void {
    this.socket.emit('chat-cancel-message');
  }
}

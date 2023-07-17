import { MessageType } from '../enums/message_type.enum';

export type RequestMessage = {
  id: string;
  userId?: string;
  userName: string;
  fromMe: boolean;
  conversationId: string;
  message: MessageBody;
};

export type MessageBody = {
  type: MessageType;
  text?: string;
  media?: Buffer;
  mentions?: string[];
};

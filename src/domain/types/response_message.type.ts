import { MessageResponseType } from "../enums/message_response_type.enum";

export type  ResponseMessage = {
    type: MessageResponseType;
    conversationId:string;
    userId?:string;
    text?: string;
    media?:Buffer;
    mentions?:string[];
}
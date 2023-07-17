import { Controller } from '@nestjs/common';
import { MessagePattern , Payload } from '@nestjs/microservices';

import { RequestGroupParticipantsUpdate } from 'src/domain/types/request_group_participant.type';
import { RequestMessage } from 'src/domain/types/request_message.type';
import { ResponseMessage } from 'src/domain/types/response_message.type';
import { MessageCommandService } from 'src/services/message.service';
import { GroupParticipantsCommandService } from 'src/services/group-participant.service';





@Controller()
export class ControllersController {
    constructor(
        private readonly messageComandService : MessageCommandService,
        private readonly groupParticipantsService: GroupParticipantsCommandService,
     ){}

     @MessagePattern('message')
     onMessage(
        @Payload('data') payload: RequestMessage,
        ): Promise<ResponseMessage> {
            return this.messageComandService.handle(payload)
        }
     @MessagePattern('group_participants')
     onGroupParticipantsUpdate(
        @Payload('data')payload: RequestGroupParticipantsUpdate,
     ): Promise<ResponseMessage> {
        return this.groupParticipantsService.handle(payload)
     }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllersController } from './controllers/controllers.controller';
import { ChatService } from './services/chat.service';
import { MessageService } from './services/message.service';
import { MediaService } from './services/media.service';
import { FirebaseService } from './services/firebase.service';
import { GroupParticipantService } from './services/group-participant.service';

@Module({
  imports: [],
  controllers: [AppController, ControllersController],
  providers: [AppService, ChatService, MessageService, MediaService, FirebaseService, GroupParticipantService],
})
export class AppModule {}

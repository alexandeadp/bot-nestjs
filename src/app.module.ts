import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ControllersController } from './controllers/controllers.controller';
import { ChatService } from './services/chat.service';
import { MessageCommandService } from './services/message.service';
import { FirebaseService } from './services/firebase.service';
import { MediaService } from './services/media.service';
import { appConfig } from './configs/app.config';
import { firebaseConfig } from './configs/firebase.config';
import { GroupParticipantsCommandService } from './services/group-participant.service';

@Module({
  controllers: [ControllersController],
  imports: [ConfigModule.forRoot({ load: [appConfig, firebaseConfig] })],
  providers: [
    MessageCommandService,
    GroupParticipantsCommandService,
    FirebaseService,
    ChatService,
    MediaService,
  ],
})
export class AppModule {}

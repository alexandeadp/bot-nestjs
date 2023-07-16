import {registerAs} from '@nestjs/config';

export const appConfig = registerAs('app' , () => ({
    port:parseInt(process.env.PORT) || 300 ,
    authInForDir: process.env.AUTH_INFO_DIR || './auth_info',
    openAiApiKey: process.env.OPENAI_API_KEY,
}))
import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        CacheModule.register({
            isGlobal: true
        }),
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.NODE_ENV}`,
            isGlobal: true,
            cache: true
        }),
        PropertyModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}

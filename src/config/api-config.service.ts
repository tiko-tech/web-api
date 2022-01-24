import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiConfigService {
    constructor(private configService: ConfigService) {}

    public get config(): IConfig {
        return {
            env: this.configService.get<string>('ENV'),
            dbUser: this.configService.get<string>('DATABASE_USER'),
            dbPassword: this.configService.get<string>('DATABASE_PASSWORD')
        };
    }

    // example
    public get isAuthEnabled(): boolean {
        return this.configService.get<string>('DATABASE_USER') === 'true';
    }
}

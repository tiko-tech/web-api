import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { logger } from './middleware/logger.middleware';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const port = configService.get('PORT');
    const env = configService.get('ENV');
    console.log(`Nest.js Express server listening on http://localhost:${port}`);

    app.enableCors();
    app.use(helmet());
    app.use(logger);

    app.enableVersioning({
        defaultVersion: '2',
        type: VersioningType.URI
    });

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true
            // whitelist: true,
            // forbidNonWhitelisted: true,
        })
    );

    // SWAGGER
    if (env === 'development') {
        const config = new DocumentBuilder().setTitle('Web API').setDescription('WEB API description').setVersion('2.0').build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('swagger', app, document);
    }

    await app.listen(port);
}
bootstrap();

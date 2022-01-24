import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { ApiConfigService } from 'src/config/api-config.service';

@Module({
  controllers: [PropertyController],
  providers: [PropertyService, ApiConfigService],
})
export class PropertyModule {}

import { Injectable, Logger } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Injectable()
export class PropertyService {
    private readonly logger = new Logger(PropertyService.name);

    create(createPropertyDto: CreatePropertyDto) {
        return 'This action adds a new property';
    }

    findAll() {
        this.logger.log('Doing something...');
        return { message: `This action returns all property` };
    }

    findOne(id: number) {
        return `This action returns a #${id} property`;
    }

    update(id: number, updatePropertyDto: UpdatePropertyDto) {
        return `This action updates a #${id} property`;
    }

    remove(id: number) {
        return `This action removes a #${id} property`;
    }
}

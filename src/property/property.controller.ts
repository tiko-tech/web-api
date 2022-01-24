import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Request } from 'express';
import { ApiConfigService } from 'src/config/api-config.service';

@Controller('property')
export class PropertyController {
    constructor(private apiConfigService: ApiConfigService, private readonly propertyService: PropertyService) {}

    @Post()
    // @ApiBody({ type: [CreatePropertyDto] })
    public create(@Body() createPropertyDto: CreatePropertyDto) {
        return this.propertyService.create(createPropertyDto);
    }

    // @Get()
    // public findAll(@Res() response) {
    //   return response.status(200).send();
    //   return this.propertyService.findAll();
    // }

    @Get()
    public findAll(@Req() request: Request) {
        // return response.status(200).send();
        return this.propertyService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id') id: string) {
        return this.propertyService.findOne(+id);
    }

    @Patch(':id')
    public update(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto) {
        return this.propertyService.update(+id, updatePropertyDto);
    }

    @Delete(':id')
    public remove(@Param('id') id: string) {
        return this.propertyService.remove(+id);
    }
}

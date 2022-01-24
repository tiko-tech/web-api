import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreatePropertyDto {
    @IsString()
    @ApiProperty() // necessary for swagger
    public name: string;

    @IsInt()
    @ApiProperty()
    public age: number;

    @IsString()
    public breed: string;
}

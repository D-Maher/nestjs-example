import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { SnowflakeRepository } from './snowflake.repository';

@Controller('snowflake')
export class SnowflakeController {
  constructor(private snowflakeRepository: SnowflakeRepository) {}

  // e.g. GET /snowflake
  @Get()
  @ApiOperation({ summary: 'Get all records from the Snowflake table' })
  async findAll() {
    return this.snowflakeRepository.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.snowflakeRepository.findById(id);
  }
}

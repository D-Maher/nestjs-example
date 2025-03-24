import { Module } from '@nestjs/common';
import { SnowflakeController } from './snowflake.controller';
import { SnowflakeRepository } from './snowflake.repository';
import { SnowflakeService } from './snowflake.service';

@Module({
  providers: [SnowflakeService, SnowflakeRepository],
  controllers: [SnowflakeController],
  // exports: [SnowflakeRepository],
})
export class SnowflakeModule {}

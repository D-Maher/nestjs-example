import { Injectable } from '@nestjs/common';
import { SnowflakeService } from './snowflake.service';

@Injectable()
export class SnowflakeRepository {
  constructor(private snowflakeService: SnowflakeService) {}

  async findAll() {
    try {
      return this.snowflakeService.executeQuery(
        'SELECT * FROM tasty_bytes_sample_data.raw_pos.menu;',
      );
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    }
  }

  async findById(id: number) {
    try {
      return this.snowflakeService.executeQuery(
        'SELECT * FROM tasty_bytes_sample_data.raw_pos.menu WHERE MENU_ID = :1;',
        [String(id)],
      );
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    }
  }

  // Add more domain-specific query methods
}

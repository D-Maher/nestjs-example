import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import * as snowflake from 'snowflake-sdk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SnowflakeService implements OnModuleInit, OnModuleDestroy {
  private connection: snowflake.Connection;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    // Create connection when service initializes
    this.connection = snowflake.createConnection({
      account: this.configService.get<string>('SNOWFLAKE_ACCOUNT', ''),
      username: this.configService.get<string>('SNOWFLAKE_USERNAME', ''),
      password: this.configService.get<string>('SNOWFLAKE_PASSWORD', ''),
      database: this.configService.get<string>('SNOWFLAKE_DATABASE', ''),
      schema: this.configService.get<string>('SNOWFLAKE_SCHEMA', ''),
      warehouse: this.configService.get<string>('SNOWFLAKE_WAREHOUSE', ''),
    });

    // Connect to Snowflake
    await this.connect();
  }

  async onModuleDestroy() {
    // Close connection when service destroys
    if (this.connection) {
      await this.destroy();
    }
  }

  private connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.connect((err) => {
        if (err) {
          reject(err);
        } else {
          console.log('Connected to Snowflake');
          resolve();
        }
      });
    });
  }

  private destroy(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.destroy((err) => {
        if (err) {
          reject(err);
        } else {
          console.log('Disconnected from Snowflake');
          resolve();
        }
      });
    });
  }

  executeQuery<T>(sqlText: string, binds: any[] = []): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.connection.execute({
        sqlText,
        binds,
        complete: (err, stmt, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows as T[]);
          }
        },
      });
    });
  }
}

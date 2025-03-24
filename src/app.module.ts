import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnowflakeModule } from './snowflake/snowflake.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SnowflakeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

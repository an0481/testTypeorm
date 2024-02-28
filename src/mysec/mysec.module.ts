import { Module } from '@nestjs/common';
import { MysecController } from './mysec.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MysecController],
})
export class MysecModule {}

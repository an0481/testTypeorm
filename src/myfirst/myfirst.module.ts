import { Module } from '@nestjs/common';
import { MyfirstController } from './myfirst.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MyfirstController],
})
export class MyfirstModule {}

import { Module } from '@nestjs/common';
import { MyfirstService } from './myfirst.service';
import { MyfirstController } from './myfirst.controller';

@Module({
  providers: [MyfirstService],
  controllers: [MyfirstController]
})
export class MyfirstModule {}

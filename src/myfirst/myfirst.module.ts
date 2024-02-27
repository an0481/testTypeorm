import { Module } from '@nestjs/common';
import { MyfirstService } from './myfirst.service';
import { MyfirstController } from './myfirst.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './myfirst.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [MyfirstService],
  controllers: [MyfirstController],
})
export class MyfirstModule {}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('myfirst')
export class MyfirstController {
  // constructor(
  //   @InjectRepository(User) private userRepository: Repository<User>,
  // ) {}
  @Get()
  myReceive(@Body() body) {
    console.log(body);
    return body;
  }
}

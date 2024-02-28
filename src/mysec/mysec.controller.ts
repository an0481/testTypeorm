import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('mysec')
export class MysecController {
  @Get()
  myReceive(@Body() body) {
    console.log(body);
    return body;
  }
}

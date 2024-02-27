import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MyfirstService } from './myfirst.service';
import { myDto } from './myfirst.dto';

@Controller('myfirst')
export class MyfirstController {
  constructor(private myfirstService: MyfirstService) {} // ❷ 유저 서비스를주입

  @Post()
  @UsePipes(ValidationPipe)
  myReceive(@Body() body: myDto) {
    console.log(body);
    return this.myfirstService.myReceive2(body);
  }
}

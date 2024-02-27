import { Injectable } from '@nestjs/common';

@Injectable()
export class MyfirstService {
  myReceive2(input) {
    console.log(input);
    return input;
  }
}

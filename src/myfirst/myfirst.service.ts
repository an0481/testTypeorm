import { Injectable } from '@nestjs/common';

@Injectable()
export class MyfirstService {
  myReceive2(input) {
    return `body : ${input}`;
  }
}

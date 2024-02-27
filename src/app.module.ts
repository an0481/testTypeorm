import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyfirstModule } from './myfirst/myfirst.module';

@Module({
  imports: [MyfirstModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

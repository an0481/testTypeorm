import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyfirstModule } from './myfirst/myfirst.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysecModule } from './mysec/mysec.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest-auth-test',
      entities: [],
      synchronize: false,
    }),
    MysecModule,
    MyfirstModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

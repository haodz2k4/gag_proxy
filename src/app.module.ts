import { Module } from '@nestjs/common';
import { MainModule } from './api/main/main.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MainModule,
    ConfigModule.forRoot({isGlobal: true})
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import type { Request } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log("Run here")
    return this.appService.getHello();
  }

  @Post()
  test(@Req() request: any): any {
    console.log(request.body.embeds)
    console.log(request.body.embeds[0].thumbnail)
    console.log(request.body.embeds[0].fields)
    return request.body.embeds
  }
}

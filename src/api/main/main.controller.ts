import { Body, Controller, Param, Post } from '@nestjs/common';
import { MainService } from './main.service';

@Controller('main')
export class MainController {
  
  constructor(private readonly mainService: MainService) {}

  @Post()
  webHook(@Body() data: any) {
    console.log(data)
  }

  @Post(':content')
  content(@Param('content') content: string) {
    return this.mainService.content(content);
  }
}

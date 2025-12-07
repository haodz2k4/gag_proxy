import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MainService } from './main.service';

@Controller('main')
export class MainController {
  
  constructor(private readonly mainService: MainService) {}

  @Get()
  main() {
    console.log("Run here")
  }

  @Post()
  webHook(@Body() data: any) {
    return this.mainService.webHook(data)
  }

  @Get(':content')
  content(@Param('content') content: string) {
    return this.mainService.content(content);
  }

  @Post(':content')
  siu(@Param('content') content: string) {
    console.log(content)
  }
}

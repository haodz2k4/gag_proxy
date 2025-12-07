import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MainService {
    private readonly logger = new Logger(MainService.name);

    content(content: string) {
        console.log(content)
        this.logger.log(content);
    }

    webHook(data: any) {
        console.log(data.embeds[0].fields)
    }
}

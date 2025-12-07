import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MainService {
    private readonly logger = new Logger(MainService.name);

    content(content: string) {
        console.log(content);
        this.logger.log(content);
    }

    async webHook(data: any) {
        const hohaohuongBot =
            'https://discord.com/api/webhooks/1444272329344417885/aDpgvNdiC62NjFbeXhrxrMEy99evFVqA9B4MSMCR-kIATgyNkNbIB5r2dvu8OyLZYlL4';
        const hosonhaoBot =
            'https://discord.com/api/webhooks/1444266087779930112/BT7V9lns3D-62kONeYNiA3e0ynzGd101BUGqM4YmW4nCvdr4WfQSbD1bHvCegQ2W9fCO';
        const generalBot =
            'https://discord.com/api/webhooks/1447251890185179198/W_KTrhK2E9F5Ew7duqxKK_Rxmnp5tuLfSeDayHS3nCEDTaSbDP2n3xpSDdsupMGo3CzL';

        for (const item of data.embeds) {
            const value = item.fields[0].value;
            const username = value.split('||')[1].trim();
            console.log(value)
            let targetWebhook = generalBot; // default

            switch (username) {
                case 'hohaohuong':
                    targetWebhook = hohaohuongBot;
                    break;

                case 'hosonhao':
                    targetWebhook = hosonhaoBot;
                    break;

                default:
                    targetWebhook = generalBot;
                    break;
            }

            // Gửi message gốc sang đúng webhook
            await fetch(targetWebhook, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content: `📩 Forwarded message từ **${username}**`,
                    embeds: [item],
                }),
            });

            this.logger.log(`Sent webhook for user: ${username}`);
        }
    }
}

import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(name: string, email: string, token: string) {
    
    const url = `example.com/auth/confirm?token=${token}`;
    const urlBase = "http://localhost/img/lock_email.jpg";

    await this.mailerService.sendMail({
      to: email,
      from: '"Time Fale Flex" <daniel.ferreira@rastreei.com>', // override default from
      subject: 'Bem vindo ao Fale Flex! Confirme seu Email',
      template: './confirmation', // ✅ template found again in v1.6.0
      context: {
        name: name,
        urlBase,
        url,
      },
    });
  }
}
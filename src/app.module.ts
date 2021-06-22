import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RamalModule } from './ramal/ramal.module';
import { ServidorModule } from './servidor/servidor.module';
import { MailModule } from './mail/mail.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '104.198.68.131',
      port: 3306,
      username: 'fcouto',
      password: 'fcouto123',
      database: 'tts',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    RamalModule,
    ServidorModule,
    MailModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

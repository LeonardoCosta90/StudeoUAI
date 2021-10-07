import { createTransport } from 'nodemailer';
import { resolve } from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { v4 as uuidV4 } from 'uuid';

import { DayjsDateProvider } from '@shared/providers/date-provider/dayjs-date-provider';

import { UsersRepository } from '../typeorm/repositories/users-repository';
import { UsersTokensRepository } from '../typeorm/repositories/users-tokens-repository';
import { getCustomRepository } from 'typeorm';
import { AppError } from '@shared/errors/app-error';

export class SendForgotPasswordMailService {
  async sendForgotPasswordMail(email: string): Promise<void> {
    const userRepository = getCustomRepository(UsersRepository);
    const daysProvider = new DayjsDateProvider();
    const userTokenRepository = getCustomRepository(UsersTokensRepository);
    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const expires_date = daysProvider.addHours(3, null);
    const token = uuidV4();

    const userToken = userTokenRepository.create({
      refresh_token: token,
      user_id: user.id,
      expires_date,
    });

    userTokenRepository.save(userToken);

    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });

    const templatePath = resolve(
      __dirname,
      '..',
      'views',
      'emails',
      'ForgotPassword.hbs',
    );

    const templateVariables = {
      name: user.name,
      link: `${process.env.FORGOT_MAIL_URL}${token}`,
    };

    const templateFileContent = fs.readFileSync(templatePath).toString('utf-8');
    const templateParse = handlebars.compile(templateFileContent);
    const templateHtml = templateParse(templateVariables);

    await transporter.sendMail({
      to: user.email,
      from: process.env.SMTP_USER,
      subject: 'Recuperação de senha',
      html: templateHtml,
    });
  }
}

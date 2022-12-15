import 'reflect-metadata';

import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { NotificationRepository } from 'src/app/repositories/notification-repository';
import { PrismaNotificationReposiory } from './prisma/repositories/prisma-notification-repository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    { provide: NotificationRepository, useClass: PrismaNotificationReposiory },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}

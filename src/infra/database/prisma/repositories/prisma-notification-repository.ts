import { Injectable } from '@nestjs/common';
import { Notification } from 'src/app/entities/Notification';
import { NotificationRepository } from '../../../../app/repositories/notification-repository';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class PrismaNotificationReposiory implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}

import { Notification } from 'src/app/entities/Notification';
import { NotificationRepository } from 'src/app/repositories/notification-repository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}

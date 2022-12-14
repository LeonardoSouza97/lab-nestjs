import { SendNotification } from './send-notification';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';

describe('sendNotification', () => {
  it('should be able sendNotification', async () => {
    const inMemoryNotificationRepository = new InMemoryNotificationRepository();

    const sendNotification = new SendNotification(
      inMemoryNotificationRepository,
    );

    const { notification } = await sendNotification.execute({
      category: 'A',
      content: 'Leooo',
      recipientId: 'id-example',
    });

    expect(sendNotification).toBeTruthy();
    expect(inMemoryNotificationRepository.notifications).toHaveLength(1);
    expect(inMemoryNotificationRepository.notifications[0]).toEqual(
      notification,
    );
  });
});

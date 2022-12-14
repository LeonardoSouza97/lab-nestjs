import { SendNotification } from './send-notification';

describe('sendNotification', () => {
  it('should be able sendNotification', () => {
    const sendNotification = new SendNotification();

    sendNotification.execute({
      category: 'A',
      content: 'Leooo',
      recipientId: 'id-example',
    });

    expect(sendNotification).toBeTruthy();
  });
});

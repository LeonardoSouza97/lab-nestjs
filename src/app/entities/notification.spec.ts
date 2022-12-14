import { Content } from './Content';
import { Notification } from './Notification';

describe('Notification', () => {
  it('should be able to create notification', () => {
    const notification = new Notification({
      category: 'A',
      content: new Content('Testeee'),
      recipientId: 'id-example',
    });

    expect(notification).toBeTruthy();
  });
});

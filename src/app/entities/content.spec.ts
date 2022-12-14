import { Content } from './Content';

describe('Notification content', () => {
  it('should be able to create notification content', () => {
    const content = new Content('Testandoooo');

    expect(content).toBeTruthy();
  });

  it('should not be able to create notification content with less than 5 characters', () => {
    expect(() => new Content('Leo')).toThrowError();
  });

  it('should not be able to create notification content with more than 240 characters', () => {
    expect(() => new Content('L'.repeat(241))).toThrowError();
  });
});

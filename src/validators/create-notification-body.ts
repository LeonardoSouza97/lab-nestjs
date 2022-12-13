import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @Length(3, 240)
  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  @Length(3, 240)
  content: string;
}

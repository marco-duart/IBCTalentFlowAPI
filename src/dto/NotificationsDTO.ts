export class CreateNotificationsDTO {
  notificationType: string;
  recipient: string;
  message: string;
  dateTime: Date;

  constructor(Data: CreateNotifications) {
    this.notificationType = Data.notificationType;
    this.recipient = Data.recipient;
    this.message = Data.message;
    this.dateTime = Data.dateTime;
  }
}

export class UpdateNotificationsDTO {
  id: string;
  notificationType: string;
  recipient: string;
  message: string;
  dateTime: Date;

  constructor(Data: UpdateNotifications) {
    this.id = Data.id;
    this.notificationType = Data.notificationType;
    this.recipient = Data.recipient;
    this.message = Data.message;
    this.dateTime = Data.dateTime;
  }
}

//TYPES

type CreateNotifications = {
  notificationType: string;
  recipient: string;
  message: string;
  dateTime: Date;
};

type UpdateNotifications = {
  id: string;
  notificationType: string;
  recipient: string;
  message: string;
  dateTime: Date;
};

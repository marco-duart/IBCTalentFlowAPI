export interface CreateNotificationsDTO {
  title: string
  notificationType: string;
  recipient: string;
  message: string;
}

export interface UpdateNotificationsDTO {
  notificationType?: string;
  recipient?: string;
  message?: string;
  dateTime?: Date;
}

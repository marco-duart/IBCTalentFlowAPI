export interface CreateNotificationDTO {
  title: string
  notificationType: string;
  recipient: string;
  message: string;
}

export interface UpdateNotificationDTO {
  notificationType?: string;
  recipient?: string;
  message?: string;
  dateTime?: Date;
}

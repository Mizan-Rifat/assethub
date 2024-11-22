interface Notification {
  id: string;
  recipientUserId: string;
  message: string;
  timestamp: Date;
}

abstract class NotificationService {
  abstract sendNotification(notification: Notification): void;
  abstract getUserNotifications(userId: string): Notification[];
  abstract markAsRead(notificationId: string): void;
}

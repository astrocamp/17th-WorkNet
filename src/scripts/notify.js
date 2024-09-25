import Alpine from "alpinejs";

Alpine.data("notificationHandler", (initialNotifications, initialUnread) => ({
  notifications: initialNotifications || [],
  unread: initialUnread || false,

  init() {
    this.startFetching();
  },

  async startFetching() {
    setInterval(async () => {
      let response = await fetch("/api/notifications/");
      let data = await response.json();

      this.notifications = data.notifications;
      this.unread = data.unread;
    }, 3 * 60 * 1000);
  },
}));

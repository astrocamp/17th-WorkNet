import Alpine from "alpinejs";

Alpine.data(
  "notificationHandler",
  (initialNotifications, initialUnreadCount) => ({
    notifications: initialNotifications || [],
    unreadNotificationsCount: initialUnreadCount || 0,

    init() {
      this.startFetching();
    },

    async startFetching() {
      setInterval(async () => {
        let response = await fetch("/api/notifications/");
        let data = await response.json();

        this.notifications = data.notifications; // 更新通知
        this.unreadNotificationsCount = data.unreadNotificationsCount; // 更新未讀數量
        console.log(this.notifications, this.unreadNotificationsCount);
      }, 10000); // 每隔 5 秒刷新一次
    },
  })
);

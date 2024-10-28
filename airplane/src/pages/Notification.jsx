import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";

export const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [newTimestamp, setNewTimestamp] = useState("");

  const [updateId, setUpdateId] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  const [updateTimestamp, setUpdateTimestamp] = useState("");

  const [deleteId, setDeleteId] = useState("");

  // Fetch all notifications from the backend
  const fetchNotifications = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/notification/getAllNotifications"
      );
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  // Create a new notification
  const createNotification = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/notification/postNotificationEntity",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: newMessage,
            timestamp: newTimestamp,
          }),
        }
      );

      if (response.ok) {
        alert("Notification created successfully!");
        fetchNotifications(); // Refresh notifications
      } else {
        console.error("Failed to create notification.");
      }
    } catch (error) {
      console.error("Error creating notification:", error);
    }
  };

  // Update an existing notification
  const updateNotification = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/notification/putNotificationDetails?id=${updateId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: updateMessage,
            timestamp: updateTimestamp,
          }),
        }
      );

      if (response.ok) {
        alert("Notification updated successfully!");
        fetchNotifications(); // Refresh notifications
      } else {
        console.error("Failed to update notification.");
      }
    } catch (error) {
      console.error("Error updating notification:", error);
    }
  };

  // Delete a notification
  const deleteNotification = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/notification/deleteNotification/${deleteId}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        alert("Notification deleted successfully!");
        fetchNotifications(); // Refresh notifications
      } else {
        console.error("Failed to delete notification.");
      }
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  // Fetch notifications on component mount
  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div>
      <Navbar activeTab="Notification" />

      <div className="container">
        <h1>Notification Management</h1>

        <h2>All Notifications</h2>
        <div className="notification-list">
          {notifications.map((notification) => (
            <div className="notification-item" key={notification.id}>
              <p className="notification-message">{notification.message}</p>
              <p className="notification-timestamp">
                {new Date(notification.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
        
        <div id="notification-form">
          <input
            type="text"
            id="message"
            placeholder="Enter notification message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            required
          />
          <input
            type="datetime-local"
            id="timestamp"
            value={newTimestamp}
            onChange={(e) => setNewTimestamp(e.target.value)}
            required
          />
          <button onClick={createNotification}>Create Notification</button>
        </div>

        <h2>Update Notification</h2>
        <input
          type="number"
          id="update-id"
          placeholder="Notification ID"
          value={updateId}
          onChange={(e) => setUpdateId(e.target.value)}
          required
        />
        <input
          type="text"
          id="update-message"
          placeholder="New message"
          value={updateMessage}
          onChange={(e) => setUpdateMessage(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          id="update-timestamp"
          value={updateTimestamp}
          onChange={(e) => setUpdateTimestamp(e.target.value)}
          required
        />
        <button onClick={updateNotification}>Update Notification</button>

        <h2>Delete Notification</h2>
        <input
          type="number"
          id="delete-id"
          placeholder="Notification ID"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
          required
        />
        <button onClick={deleteNotification}>Delete Notification</button>
      </div>
    </div>
  );
};

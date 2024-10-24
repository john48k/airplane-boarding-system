import { Navbar } from "../components/Navbar";

export const Notification = () => {
  return (
    <div>
      <Navbar activeTab="Notification" />

      <div className="container">
        <h1>Notification Management</h1>

        <div id="notification-form">
          <input
            type="text"
            id="message"
            placeholder="Enter notification message"
            required
          />
          <input type="datetime-local" id="timestamp" required />
          <button id="create-btn">Create Notification</button>
        </div>

        <h2>All Notifications</h2>
        <ul id="notification-list"></ul>

        <h2>Update Notification</h2>
        <input
          type="number"
          id="update-id"
          placeholder="Notification ID"
          required
        />
        <input
          type="text"
          id="update-message"
          placeholder="New message"
          required
        />
        <input type="datetime-local" id="update-timestamp" required />
        <button id="update-btn">Update Notification</button>

        <h2>Delete Notification</h2>
        <input
          type="number"
          id="delete-id"
          placeholder="Notification ID"
          required
        />
        <button id="delete-btn">Delete Notification</button>
      </div>

      {/* Closing script tag */}
      <script src="script.js"></script>
    </div>
  );
};

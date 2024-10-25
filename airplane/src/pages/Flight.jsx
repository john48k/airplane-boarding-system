import { Navbar } from "../components/Navbar";

export const Flight = () => {
  return (
    <div>
      <Navbar activeTab="Flight" />

      <div className="container">
        <h1>Flight Management Form</h1>
        <form id="flightForm" action="/api/flights" method="POST">
          <label htmlFor="flightNumber">Flight Number:</label>
          <input type="number" id="flightNumber" name="flightNumber" required />

          <label htmlFor="departureTime">Departure Time:</label>
          <input type="time" id="departureTime" name="departureTime" required />

          <label htmlFor="arrivalTime">Arrival Time:</label>
          <input type="time" id="arrivalTime" name="arrivalTime" required />

          <label htmlFor="flightStatus">Flight Status:</label>
          <select id="flightStatus" name="flightStatus" required>
            <option style={{ color: "gray" }} disabled selected>
              Choose here
            </option>
            <option value="boarding">Boarding</option>
            <option value="on_flight">On Flight</option>
            <option value="arrived">Arrived</option>
          </select>

          <h2>All Flights</h2>
          <ul id="flight-list"></ul>

          <h2>Update Flight</h2>
          <input
            type="number"
            id="update-flight-id"
            placeholder="Flight ID"
            required
          />
          <input
            type="number"
            id="update-flight-status"
            placeholder="New Flight Status"
            required
          />
          <button id="update-flight-btn" type="button">
            Update Flight
          </button>

          <h2 className="deleteflight-title">Delete Flight</h2>
          <input
            type="number"
            id="delete-flight-id"
            placeholder="Flight ID"
            required
          />
          <button className="flight-del-button" id="delete-flight-btn" type="button">
            Delete Flight
          </button>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

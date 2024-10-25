import { Navbar } from "../components/Navbar";

// Boarding.js


export const Passenger = () => {
  return (
    <div>
      <Navbar activeTab="Passenger" />

      <div className="form-container">
        <h2 className="pass-title">PassengerAnalytics</h2>
        <form action="#" method="post">
          <label htmlFor="seat-number">Check In Time:</label>
          <input type="time" id="seat-number" name="seat-number" required />

          <label htmlFor="boarding-time">Boarding Time:</label>
          <input type="time" id="boarding-time" name="boarding-time" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};


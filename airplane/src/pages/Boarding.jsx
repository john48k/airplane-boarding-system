import { Navbar } from "../components/Navbar";

export const Boarding = () => {
  return (
    <div>
      <Navbar activeTab="Boarding" />

      <div className="form-container">
        <h1>Boarding Information</h1>
        <form action="#" method="post">
          <label htmlFor="seat-number">Seat Number:</label>
          <input type="text" id="seat-number" name="seat-number" required />

          <label htmlFor="boarding-time">Boarding Time:</label>
          <input type="time" id="boarding-time" name="boarding-time" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

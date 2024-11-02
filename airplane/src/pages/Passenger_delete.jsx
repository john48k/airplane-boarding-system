import { Navbar } from "../components/Navbar";

export const Passengerdelete = () => {
  return (
    <>
      <div className="container">
        <Navbar activeTab="Passengerdelete" />

        <h1>Delete Passenger</h1>

        <div id="passenger-form">
          <form action="/submit" method="post">
            <label htmlFor="passengerid">Passenger ID:</label>
            <input
              type="text"
              id="delete-passengerid"
              name="passengerid"
              required
            />
            <br />
            <br />
          </form>

          <div className="action-buttons">
            <button
              type="button"
              className="return-button"
              onClick={() => (window.location.href = "passenger.html")}
            >
              Return
            </button>
            <button
              id="delete-passenger-btn"
              type="submit"
              className="confirm-button"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

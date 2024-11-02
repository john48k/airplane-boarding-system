import { Navbar } from "../components/Navbar";

export const Passenger = () => {
  return (
    <>
      <div className="container">
        <Navbar activeTab="Passenger" />

        <h1>Passenger</h1>

        <div id="passenger-form">
          <form action="/submit" method="post">
            <label htmlFor="passengerid">Passenger ID:</label>
            <input type="text" id="passengerid" name="passengerid" required />
            <br />
            <br />

            <label htmlFor="passportnumber">Passport Number:</label>
            <input
              type="text"
              id="passportnumber"
              name="passportnumber"
              required
            />
            <br />
            <br />

            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" name="firstname" required />
            <br />
            <br />

            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" name="lastname" required />
            <br />
            <br />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <br />

            <label htmlFor="phonenumber">Phone Number:</label>
            <input type="tel" id="phonenumber" name="phonenumber" required />
            <br />
            <br />

            <button type="submit">Submit</button>
          </form>

          <div className="action-buttons">
            <button
              type="button"
              className="update-button"
              onClick={() => (window.location.href = "passenger_update.html")}
            >
              Update Passenger
            </button>
            <button
              type="button"
              className="delete-button"
              onClick={() => (window.location.href = "passenger_delete.html")}
            >
              Delete Passenger
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

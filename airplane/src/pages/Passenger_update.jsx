import { Navbar } from "../components/Navbar";

export const Passengerupdate = () => {
  return (
    <>
      <div className="container">
        <Navbar activeTab="Passengerupdate" />

        <h1>Update Passenger</h1>

        <div id="passenger-form">
          <form action="/submit" method="post">
            <label htmlFor="passengerid">Update Passenger ID:</label>
            <input
              type="text"
              id="update-passengerid"
              name="passengerid"
              required
            />
            <br />
            <br />

            <label htmlFor="passportnumber">Update Passport Number:</label>
            <input
              type="text"
              id="update-passportnumber"
              name="passportnumber"
              required
            />
            <br />
            <br />

            <label htmlFor="firstname">Update First Name:</label>
            <input
              type="text"
              id="update-firstname"
              name="firstname"
              required
            />
            <br />
            <br />

            <label htmlFor="lastname">Update Last Name:</label>
            <input type="text" id="update-lastname" name="lastname" required />
            <br />
            <br />

            <label htmlFor="email">Update Email:</label>
            <input type="email" id="update-email" name="email" required />
            <br />
            <br />

            <label htmlFor="phonenumber">Update Phone Number:</label>
            <input
              type="tel"
              id="update-phonenumber"
              name="phonenumber"
              required
            />
            <br />
            <br />

            <div className="action-buttons">
              <button
                type="button"
                className="return-button"
                onClick={() => (window.location.href = "passenger.html")}
              >
                Return
              </button>
              <button
                id="update-passenger-btn"
                type="submit"
                className="confirm-button"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

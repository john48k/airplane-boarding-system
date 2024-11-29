import React from "react";

export const Passengerupdate = () => {
  const handleUpdate = async (event) => {
    event.preventDefault();
    const passengerId = event.target["update-passengerid"].value;
    const data = {
      passportnumber: event.target["update-passportnumber"].value,
      firstname: event.target["update-firstname"].value,
      lastname: event.target["update-lastname"].value,
      email: event.target["update-email"].value,
      phonenumber: event.target["update-phonenumber"].value,
    };

    try {
      const response = await fetch(
        `http://localhost:8080/api/passenger/${passengerId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Passenger updated successfully!");
      } else {
        alert("Failed to update passenger.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Update Passenger</h1>

        <div id="passenger-form">
          <form onSubmit={handleUpdate}>
            <label htmlFor="update-passengerid">Update Passenger ID:</label>
            <input
              type="text"
              id="update-passengerid"
              name="passengerid"
              required
            />
            <br />
            <br />

            <label htmlFor="update-passportnumber">
              Update Passport Number:
            </label>
            <input
              type="text"
              id="update-passportnumber"
              name="passportnumber"
              required
            />
            <br />
            <br />

            <label htmlFor="update-firstname">Update First Name:</label>
            <input
              type="text"
              id="update-firstname"
              name="firstname"
              required
            />
            <br />
            <br />

            <label htmlFor="update-lastname">Update Last Name:</label>
            <input type="text" id="update-lastname" name="lastname" required />
            <br />
            <br />

            <label htmlFor="update-email">Update Email:</label>
            <input type="email" id="update-email" name="email" required />
            <br />
            <br />

            <label htmlFor="update-phonenumber">Update Phone Number:</label>
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
                onClick={() => (window.location.href = "Admin")}
              >
                <div className="pass-update-return-button">Return</div>
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

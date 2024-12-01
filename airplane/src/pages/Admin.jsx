import * as React from "react";
import { useState } from "react";
import { extendTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid2";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBBtn, MDBCard } from "mdb-react-ui-kit";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBInput,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

const NAVIGATION = [
  {
    kind: "header",
    title: "Hello Admin",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },

  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "User",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Logout",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "ResetPassword",
        icon: <DescriptionIcon />,
      },
    ],
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled("div")(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function DashboardLayoutBasic(props) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      passengerid: event.target.passengerid.value,
      passportnumber: event.target.passportnumber.value,
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      phonenumber: event.target.phonenumber.value,
    };

    try {
      const response = await fetch("http://localhost:8080/api/passenger", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Passenger created successfully!");
      } else {
        alert("Failed to create passenger.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    try {
      const response = await fetch("http://localhost:8080/api/boarding-pass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ seatNumber, boardingTime }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        alert(`Boarding pass created: ${JSON.stringify(data)}`);
      } else {
        console.error("Error:", response.statusText);
        alert("Failed to create boarding pass.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    if (!checkInTime || !boardingTime) {
      setMessage(
        "Please enter valid Date and Time for both Check-In and Boarding."
      );
      return;
    }

    // Prepare passenger data with LocalDateTime format
    const passengerData = {
      checkinTime: `${checkInTime}:00`, // Add seconds to match LocalDateTime format
      boardingTime: `${boardingTime}:00`, // Add seconds to match LocalDateTime format
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/passengeranalytics",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(passengerData),
        }
      );

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Passenger data saved:", data);
      setMessage("Passenger data saved successfully!"); // Success message

      // Redirect to PassengerLogs page
      window.location.href = "/PassengerLogs"; // Update this path to match your actual route
    } catch (error) {
      console.error("Error saving passenger data:", error);
      setMessage(`Error saving passenger data: ${error.message}`); // Error message
    }
  };

  const [seatNumber, setSeatNumber] = useState("");
  const [boardingTime, setBoardingTime] = useState("");
  const [checkInTime, setCheckInTime] = useState(""); // State for check-in time
  const [message, setMessage] = useState(""); // State for success/error message
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    gateNumber: "",
    terminal: "",
    gateStatus: "AVAILABLE",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        title: "FLIGHTMATCH",
      }}
    >
      <DashboardLayout>
        <PageContainer>
          <Grid container spacing={1}>
            <Grid size={5} />
            <Grid size={12}>
              <h1>Passenger Information</h1>
              <Box sx={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                  checkboxSelection
                  disableRowSelectionOnClick
                  height={200}
                />
              </Box>
            </Grid>
            <Grid size={12}>
              <MDBCol md="6">
                <MDBCard className="my-5">
                  <MDBCardBody className="p-5">
                    <h1>Passenger</h1>

                    <form onSubmit={handleSubmit}>
                      <MDBRow>
                        <MDBCol col="6">
                          <MDBInput
                            wrapperClass="mb-4"
                            label="First name"
                            id="firstname"
                            type="text"
                            name="firstname"
                            required
                          />
                        </MDBCol>
                        <MDBCol col="6">
                          <MDBInput
                            wrapperClass="mb-4"
                            label="Last name"
                            id="lastname"
                            type="text"
                            name="lastname"
                            required
                          />
                        </MDBCol>
                      </MDBRow>

                      <MDBInput
                        wrapperClass="mb-4"
                        label="Email"
                        id="email"
                        type="email"
                        name="email"
                        required
                      />

                      <MDBInput
                        wrapperClass="mb-4"
                        label="Passenger ID"
                        id="passengerid"
                        type="text"
                        name="passengerid"
                        required
                      />

                      <MDBInput
                        wrapperClass="mb-4"
                        label="Passport Number"
                        id="passportnumber"
                        type="text"
                        name="passportnumber"
                        required
                      />

                      <MDBInput
                        wrapperClass="mb-4"
                        label="Phone Number"
                        id="phonenumber"
                        type="tel"
                        name="phonenumber"
                        required
                      />

                      <MDBBtn className="w-100 mb-4" size="md" type="submit">
                        Submit
                      </MDBBtn>

                      <a
                        href="Passengerupdate"
                        className="w-100 mb-4 update-button"
                        style={{
                          display: "inline-block",
                          textAlign: "center",
                          padding: "10px 20px",
                          backgroundColor: "#0d6efd", // Update with your desired button color
                          color: "#fff",
                          borderRadius: "4px",
                          textDecoration: "none",
                        }}
                      >
                        UPDATE PASSENGER
                      </a>

                      <MDBBtn
                        className="w-100 mb-4 delete-button"
                        size="md"
                        type="button"
                        onClick={() =>
                          (window.location.href = "passenger_delete.html")
                        }
                      >
                        Delete Passenger
                      </MDBBtn>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </Grid>
            <Grid size={12}>
              <MDBCardBody className="p-5">
                <h1>BOARDING PASS</h1>

                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Seat Number"
                    id="seatNumber"
                    type="text"
                    value={seatNumber}
                    required
                    onChange={(event) => setSeatNumber(event.target.value)}
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Boarding Time"
                    id="boardingTime"
                    type="datetime-local"
                    value={boardingTime}
                    onChange={(event) => setBoardingTime(event.target.value)}
                  />

                  <MDBBtn type="submit" className="w-100 mb-4" size="md">
                    Submit
                  </MDBBtn>
                </form>
              </MDBCardBody>
            </Grid>

            <Grid size={12}>
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <h2 className="fw-bold mb-2 text-center">ANALYTICS DETAILS</h2>

                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Check-In Date and Time:"
                    id="check-in-time"
                    type="datetime-local"
                    size="lg"
                    required
                    value={checkInTime}
                    onChange={(e) => setCheckInTime(e.target.value)}
                  />

                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Boarding Date and Time:"
                    id="boarding-time"
                    type="datetime-local"
                    size="lg"
                    required
                    value={boardingTime}
                    onChange={(e) => setBoardingTime(e.target.value)}
                  />

                  <MDBBtn size="lg" type="submit">
                    Submit
                  </MDBBtn>
                </form>

                <hr className="my-4" />
              </MDBCardBody>
            </Grid>

            <Grid size={12}>
              <MDBCardBody className="p-5 w-100">
                <h2 className="fw-bold mb-4 text-center">Add New Gate</h2>
                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Gate Number"
                    name="gateNumber"
                    type="text"
                    value={formData.gateNumber}
                    onChange={handleChange}
                    required
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Terminal"
                    name="terminal"
                    type="text"
                    value={formData.terminal}
                    onChange={handleChange}
                    required
                  />
                  <select
                    className="form-select mb-4"
                    name="gateStatus"
                    value={formData.gateStatus}
                    onChange={handleChange}
                  >
                    <option value="AVAILABLE">Available</option>
                    <option value="OCCUPIED">Occupied</option>
                    <option value="MAINTENANCE">Maintenance</option>
                  </select>
                  <MDBBtn type="submit" className="w-100 mb-4" size="md">
                    Add Gate
                  </MDBBtn>
                </form>
              </MDBCardBody>
            </Grid>

            <Grid size={12}>
              <MDBCardBody className="p-5">
                <h1>FLIGHTS DETAILS</h1>

                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Flight Number"
                    id="flightNumber"
                    type="number"
                    name="flight_number"
                    value={formData.flight_number}
                    onChange={handleChange}
                    required
                    // min="1"
                    // step="1"
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Departure Time"
                    id="departureTime"
                    type="datetime-local"
                    name="departure_time"
                    value={formData.departure_time}
                    onChange={handleChange}
                    required
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Arrival Time"
                    id="arrivalTime"
                    type="datetime-local"
                    name="arrival_time"
                    value={formData.arrival_time}
                    onChange={handleChange}
                    required
                  />
                  <select
                    id="flightStatus"
                    name="flight_status"
                    className="form-select"
                    value={formData.flight_status}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Choose here
                    </option>
                    <option value="0">BOARDING</option>
                    <option value="1">ON FLIGHT</option>
                    <option value="2">ARRIVED</option>
                  </select>

                  <div className="delete-update-button-container ">
                    <MDBBtn
                      type="button"
                      className="update-button flight-update-color"
                      size="md"
                      onClick={() => navigate("/flightview")}
                    >
                      Flight List
                    </MDBBtn>

                    <MDBBtn
                      type="submit"
                      className="delete-button  flight-create-color"
                      size="md"
                    >
                      Create Flight
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}

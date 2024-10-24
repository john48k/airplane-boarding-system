import { Navbar } from "../components/Navbar";

export const Gate = () => {
  return (
    <div>
      <Navbar activeTab="Gate" />

      <div className="container">
        <h1>Gate Management Form</h1>
        <form id="gateForm" action="/api/gates" method="POST">
          <label htmlFor="gateNumber">Gate Number:</label>
          <input type="text" id="gateNumber" name="gateNumber" required />

          <label htmlFor="terminal">Terminal:</label>
          <input type="text" id="terminal" name="terminal" required />

          <label htmlFor="gateStatus">Gate Status:</label>
          <select id="gateStatus" name="gateStatus" required>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="under_maintenance">Under Maintenance</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

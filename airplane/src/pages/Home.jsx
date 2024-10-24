import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar activeTab="Home" />

      <div class="content">
        <h1>Welcome to the Homepage</h1>
        <p>Connecting the world, one flight at a time.</p>
      </div>
    </div>
  );
};

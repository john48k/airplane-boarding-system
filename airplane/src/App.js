import logo from './logo.svg';
import './App.css';
import './css/navbar.css'

function App() {
  return (
    <div className="App">
      <nav class="navbar">
    <ul class="navbar-menu">
      <li><a href="home.html" id="highlight">Home</a></li>
      <li><a href="gate.html">Gate</a></li>
      <li><a href="flight.html">Flight</a></li>
      <li><a href="boarding.html">Boarding Pass</a></li>
      <li><a href="notification.html">Notification</a></li>
    </ul>
  </nav>

  <div class="content">
    <h1>Welcome to the Homepage</h1>
    <p>Connecting the world, one flight at a time.</p>
  </div>
    </div>
  );
}

export default App;

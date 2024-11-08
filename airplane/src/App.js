import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PassengerLogs from './components/PassengerLogs';  // Adjust the path as necessary
import Analytics from './components/Analytics'; // Adjust the path as necessary

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/passenger-logs" element={<PassengerLogs />} />
        <Route path="/analytics" element={<Analytics />} />
        {/* Add other routes as necessary */}
      </Routes>
    </Router>
  );
}

export default App;

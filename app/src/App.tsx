import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ActiveFlights from "./ActiveFlights";

interface AcarsMessage {
  id: number;
  time: string;
  sender: string;
  message: string;
}

const dummyData: AcarsMessage[] = [
  {
    id: 1,
    time: "12:00Z",
    sender: "ATC",
    message: "CLEARED FL350"
  },
  {
    id: 2,
    time: "12:05Z",
    sender: "DISP",
    message: "WEATHER UPDATE"
  },
  {
    id: 3,
    time: "12:10Z",
    sender: "ATC",
    message: "CONTACT CENTER"
  }
];

function Home() {
  return (
    <div className="App">
      <h1>Electron ACARS Viewer</h1>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Sender</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item) => (
            <tr key={item.id}>
              <td>{item.time}</td>
              <td>{item.sender}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/active-flights">Active Flights</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/active-flights" element={<ActiveFlights />} />
      </Routes>
    </Router>
  );
}

export default App;

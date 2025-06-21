import "./App.css";

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

function App() {
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

export default App;

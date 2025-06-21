
interface Flight {
  id: number;
  pilot: string;
  origin: string;
  destination: string;
  aircraft: string;
}

const flights: Flight[] = [
  { id: 1, pilot: 'John Doe', origin: 'KJFK', destination: 'KLAX', aircraft: 'B737' },
  { id: 2, pilot: 'Jane Smith', origin: 'EGLL', destination: 'EHAM', aircraft: 'A320' },
  { id: 3, pilot: 'Bob Brown', origin: 'KSEA', destination: 'CYYZ', aircraft: 'B777' },
];

export default function ActiveFlights() {
  return (
    <div className="ActiveFlights">
      <h1>Active Flights</h1>
      <table>
        <thead>
          <tr>
            <th>Pilot</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Aircraft</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.pilot}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{flight.aircraft}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


import { User } from 'lucide-react'
import { DataTable } from './components'
import type { Column } from './components'

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
  const columns: Column<Flight>[] = [
    {
      key: 'pilot',
      header: 'Pilot',
      render: (row) => (
        <span className="flex items-center gap-2"><User className="h-4 w-4" />{row.pilot}</span>
      ),
    },
    { key: 'origin', header: 'Origin' },
    { key: 'destination', header: 'Destination' },
    { key: 'aircraft', header: 'Aircraft' },
  ]

  return (
    <div className="ActiveFlights space-y-4">
      <h1 className="text-2xl font-bold">Active Flights</h1>
      <DataTable data={flights} columns={columns} onEdit={() => {}} onDelete={() => {}} />
    </div>
  )
}

import { useState } from 'react'
import {
  Button,
  Input,
  Label,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  Dialog,
  DataTable,
} from './components'
import { SimpleMap } from './components/maps'
import type { Column } from './components'

interface Person {
  id: number
  name: string
  age: number
}

const people: Person[] = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
]

export default function UiElements() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const columns: Column<Person>[] = [
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age' },
  ]

  const tabs = [
    { value: 'one', label: 'One', content: <p>Tab One content</p> },
    { value: 'two', label: 'Two', content: <p>Tab Two content</p> },
  ]

  return (
    <div className="space-y-8 p-4">
      <h1 className="text-2xl font-bold">UI Elements</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Table</h2>
        <DataTable data={people} columns={columns} />
        <pre>{`<DataTable data={rows} columns={columns} />`}</pre>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Form Elements</h2>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter name" />
          <div className="flex items-center gap-2">
            <Checkbox id="check" /> <Label htmlFor="check">Accept</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio name="r" id="r1" /> <Label htmlFor="r1">Choice A</Label>
          </div>
          <Button>Submit</Button>
        </div>
        <pre>{`<Input />\n<Checkbox />\n<Radio />`}</pre>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Leaflet Map</h2>
        <SimpleMap />
        <pre>{`<SimpleMap />`}</pre>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Tabs</h2>
        <Tabs tabs={tabs} />
        <pre>{`<Tabs tabs={tabs} />`}</pre>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Switch</h2>
        <Switch />
        <pre>{`<Switch />`}</pre>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Dialog</h2>
        <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} title="Example Dialog">
          <p>This is a dialog.</p>
        </Dialog>
        <pre>{`<Dialog open={open} onClose={fn} title="Title">...</Dialog>`}</pre>
      </section>
    </div>
  )
}

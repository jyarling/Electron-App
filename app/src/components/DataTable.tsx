import { useMemo, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import type { DropResult, DraggableProvided, DroppableProvided } from 'react-beautiful-dnd'
import { GripVertical, Pencil, Trash } from 'lucide-react'
import { Button, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui'

export interface Column<T> {
  key: keyof T
  header: string
  render?: (row: T) => React.ReactNode
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  onEdit?: (row: T) => void
  onDelete?: (row: T) => void
  itemsPerPage?: number
}

export function DataTable<T extends { id: number | string }>({
  data,
  columns,
  onEdit,
  onDelete,
  itemsPerPage = 5,
}: DataTableProps<T>) {
  const [rows, setRows] = useState(data)
  const [filter, setFilter] = useState('')
  const [page, setPage] = useState(0)

  const filtered = useMemo(() => {
    const term = filter.toLowerCase()
    return rows.filter((row) =>
      Object.values(row).some((v) => String(v).toLowerCase().includes(term)),
    )
  }, [filter, rows])

  const paged = useMemo(() => {
    const start = page * itemsPerPage
    return filtered.slice(start, start + itemsPerPage)
  }, [filtered, page, itemsPerPage])

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return
    const updated = Array.from(rows)
    const [removed] = updated.splice(result.source.index, 1)
    updated.splice(result.destination.index, 0, removed)
    setRows(updated)
  }

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value)
          setPage(0)
        }}
        placeholder="Filter..."
        className="w-full rounded-md border px-3 py-2"
      />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="table">
          {(provided: DroppableProvided) => (
            <Table ref={provided.innerRef} {...provided.droppableProps}>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-4" />
                  {columns.map((col) => (
                    <TableHead key={String(col.key)}>{col.header}</TableHead>
                  ))}
                  {(onEdit || onDelete) && <TableHead className="text-right">Actions</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {paged.map((row, index) => (
                  <Draggable key={String(row.id)} draggableId={String(row.id)} index={index}>
                    {(drag: DraggableProvided) => (
                      <TableRow ref={drag.innerRef} {...drag.draggableProps}>
                        <TableCell {...drag.dragHandleProps} className="cursor-grab">
                          <GripVertical className="h-4 w-4" />
                        </TableCell>
                        {columns.map((col) => (
                          <TableCell key={String(col.key)}>
                            {col.render ? col.render(row) : (row[col.key] as React.ReactNode)}
                          </TableCell>
                        ))}
                        {(onEdit || onDelete) && (
                          <TableCell className="space-x-2 text-right">
                            {onEdit && (
                              <Button size="icon" variant="outline" onClick={() => onEdit(row)}>
                                <Pencil className="h-4 w-4" />
                              </Button>
                            )}
                            {onDelete && (
                              <Button size="icon" variant="destructive" onClick={() => onDelete(row)}>
                                <Trash className="h-4 w-4" />
                              </Button>
                            )}
                          </TableCell>
                        )}
                      </TableRow>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </TableBody>
            </Table>
          )}
        </Droppable>
      </DragDropContext>
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {page * itemsPerPage + 1}-{Math.min((page + 1) * itemsPerPage, filtered.length)} of {filtered.length}
        </div>
        <div className="space-x-2">
          <Button variant="outline" disabled={page === 0} onClick={() => setPage((p) => Math.max(p - 1, 0))}>
            Previous
          </Button>
          <Button
            variant="outline"
            disabled={(page + 1) * itemsPerPage >= filtered.length}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Employee } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Employee>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'first_name',
    header: 'NOMBRE DEL SERVICIO'
  },
  {
    accessorKey: 'country',
    header: 'DATOS DE SERVICIOS'
  },
  {
    accessorKey: 'email',
    header: 'ERRORES DE SERVICIOS'
  },
  {
    accessorKey: 'job',
    header: 'ALERTAS DE SERVICIOS'
  },
  {
    accessorKey: 'gender',
    header: 'ESTADO'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];

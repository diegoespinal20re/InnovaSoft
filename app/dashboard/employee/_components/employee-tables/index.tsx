'use client';

import { DataTable } from '@/components/ui/table/data-table';
import { DataTableFilterBox } from '@/components/ui/table/data-table-filter-box';
import { DataTableResetFilter } from '@/components/ui/table/data-table-reset-filter';
import { DataTableSearch } from '@/components/ui/table/data-table-search';
import { Employee } from '@/constants/data';
import { columns } from '../employee-tables/columns';
import {
  GENDER_OPTIONS,
  useEmployeeTableFilters
} from './use-employee-table-filters';
import { useState } from 'react';

export default function EmployeeTable({
  data,
  totalData
}: {
  data: Employee[];
  totalData: number;
}) {
  const [employeeData, setEmployeeData] = useState<Employee[]>(data);
  const {
    genderFilter,
    setGenderFilter,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setPage,
    setSearchQuery
  } = useEmployeeTableFilters();

  // Función para eliminar todos los datos
  const handleDeleteData = () => {
    setEmployeeData([]); // Limpiar todos los datos de la tabla
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="name"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
        <DataTableFilterBox
          filterKey="gender"
          title="Estado"
          options={GENDER_OPTIONS}
          setFilterValue={setGenderFilter}
          filterValue={genderFilter}
        />
        <DataTableResetFilter
          isFilterActive={isAnyFilterActive}
          onReset={resetFilters}
        />
      </div>

      {/* Botón para eliminar todos los datos */}
      <button
        onClick={handleDeleteData}
        className="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Eliminar todos los datos
      </button>

      {/* Tabla de empleados */}
      <DataTable columns={columns} data={employeeData} totalItems={totalData} />
    </div>
  );
}

import React, { useState, useMemo } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";

// Global Search Filter Component
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <span>
      Search:{" "}
      <input
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value || undefined)}
        placeholder="Type to search..."
        className="px-2 py-1 border rounded"
      />
    </span>
  );
};

const ConstitutionTable = () => {
  // Sample Data (Add your actual data here)
  const data = useMemo(
    () => [
      {
        title: "The Constitution of India 2024 (English Version)",
        download: "Accessible Version : View (2 MB) 🔗",
      },
      {
        title: "The Constitution of India (2024)",
        download: "view more 🔗",
      },
      {
        title: "The Constitution of India 2019 (Hindi Version)",
        download: "Download (3 MB) 🔗",
      },
    ],
    []
  );

  // Table Columns
  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title", // Accessor for the title
      },
      {
        Header: "View / Download",
        accessor: "download", // Accessor for the download link
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page, // Instead of rows, use page for pagination
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageCount,
    gotoPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 }, // Set the default page size
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  return (
    <div className="container mx-auto mt-6">
      <h1 className="mb-4 text-2xl font-bold">Constitution of India</h1>

      {/* Global Search */}
      <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />

      {/* Table */}
      <table
        {...getTableProps()}
        className="w-full mt-4 border border-collapse border-gray-200 table-auto"
      >
        <thead className="text-white bg-yellow-500">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-2 text-left border border-gray-300"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-100">
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-4 py-2 border border-gray-300"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ConstitutionTable;

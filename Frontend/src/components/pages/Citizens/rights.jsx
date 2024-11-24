import React, { useState, useMemo } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import { useNavigate } from "react-router-dom";

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

const RightsTable = () => {
  const data = useMemo(
    () => [
      {
        title: "The Constitution of India 2024 (English Version)",
        download: (
          <a
            href="https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600"
          >
            Accessible Version : Download/View (2 MB) 🔗
          </a>
        ),
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
      initialState: { pageSize: 10 }, // Set the default page size
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex } = state;
  const navigate = useNavigate();

  const Homeclick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container flex flex-row gap-4 mx-auto mt-6">
        <span
          onClick={Homeclick}
          className=""
        >
          <h4 className="text-red-500 cursor-pointer">Home</h4>
        </span>
        <span>&gt;</span>
        <h4>Fundamental Rights</h4>
      </div>

      <div className="container pb-40 mx-auto mt-5 mb-6">
        <h1 className="mb-4 text-2xl font-bold">Fundamental Rights / 
        मौलिक अधिकार </h1>

        {/* Global Search */}
        <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />

        {/* Table */}
        <table {...getTableProps()} className="w-full mt-4 border border-collapse border-gray-200 table-auto">
          <thead>
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
            className="px-4 py-2 bg-yellow-500 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page{" "}
            <strong>
              {pageIndex} of {pageOptions.length}
            </strong>
          </span>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="px-4 py-2 bg-yellow-500 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default RightsTable;
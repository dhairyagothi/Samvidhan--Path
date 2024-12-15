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

const ConstitutionTable = () => {
  // Sample Data (Add your actual data here)
const data = useMemo(
    () => [
        
            {
                title: "The Constitution of India 2024 (English Version)",
                download: <a href="https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View (2 MB) 🔗</a>,
            },
            {
                title: "The Constitution of India (2024)",
                download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/coi/COI_2024.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
            },
            {
                title: "The Constitution of India in Kashmiri",
                download: <a href="https://legislative.gov.in/kashmiri/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
            },
            {
                title: "The Constitution of India in Dogri",
                download: <a href="https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2023/05/2023072614.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View (8 MB) 🔗</a>,
            },
            {
                title: "The Constitution of India in Gujarati",
                download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/constitution_india_gujarati_18122017.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
            },
            {
                title: "The Constitution of India in Kannada",
                download: <a href="https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2023/05/2023051228.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View (4 MB) 🔗</a>,
            },
            {
                title: "The Constitution of India in Konkani",
                download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/The%20Constitution%20of%20India%20in%20Konkani.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
            },
            {
                title: "The Constitution of India in Maithili",
                download: <a href="https://legislative.gov.in/maithili/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
            },
            {
                title: "The Constitution of India in Malayalam",
                download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/Constitution%20of%20India_0.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
            },

            
                {
                    title: "The Constitution of India in Sindhi",
                    download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/The%20Constitution%20of%20India%20in%20Sindhi.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                },
                {
                    title: "The Constitution of India in Tamil",
                    download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/Tamil%20version%20Constitution%20of%20India.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                },
                {
                    title: "The Constitution of India in Bengali, Version 2021",
                    download: <a href="https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2023/05/2023051295.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View (1 MB) 🔗</a>,
                },
                
                    {
                        title: "The Constitution of India in Marathi",
                        download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/Marathi%20Savidhan.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                    },
                    {
                        title: "The Constitution of India in Nepali",
                        download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/The%20Constitution%20of%20India%20in%20Nepali.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                    },
                    {
                        title: "The Constitution of India in Odia",
                        download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/The%20Constitution%20of%20Indian.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                    },
                    {
                        title: "The Constitution of India in Punjabi",
                        download: <a href="https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2023/05/2023051245.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View (8 MB) 🔗</a>,
                    },
                    {
                        title: "The Constitution of India in Sanskrit",
                        download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/The%20Constitution%20of%20India%20in%20Sanskrit.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                    },
                    {
                        title: "The Constitution of India in Santhali",
                        download: <a href="https://legislative.gov.in/santhali" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                    },
           
                
                    
                        {
                            title: "The Constitution of India in Urdu",
                            download: <a href="https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2023/05/2023050124.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View (5 MB) 🔗</a>,
                        },
                        {
                            title: "The Constitution of India in Tamil (2008)",
                            download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/constitution%20of%20India%20in%20Tamil%202008%20_0.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                        },
                        {
                            title: "The Constitution of India in Assamese",
                            download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/The%20Constitution%20of%20India%20in%20Assamese.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                        },
                        {
                            title: "The Constitution of India in Bengali, Version 2022",
                            download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/Constitution%20of%20India%20in%20Bengali%2C%20Version%202022.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                        },
                        {
                            title: "The Constitution of India in Bodo",
                            download: <a href="https://legislative.gov.in/bodo/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                        },
                        {
                            title: "Constitution of India – in Urdu",
                            download: <a href="https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2023/05/2023050124.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View (5 MB) 🔗</a>,
                        },
                        {
                            title: "The Constitution of India – in Diglot Edition (English-Marathi)",
                            download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/Savidhan.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                        }
                    ,
                        {
                            title: "Constitution of India – in Tamil (Part-1)",
                            download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/part1.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                        },
                        {
                            title: "Constitution of India – in Tamil (Part-2)",
                            download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/part2.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                        },
                        {
                            title: "Constitution of India – in Tamil (Part-3)",
                            download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/part3.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                        },
                        {
                            title: "Constitution of India – in Tamil (Part-4)",
                            download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/part4.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                        },
                        {
                            title: "Constitution of India – in Tamil (Part-5)",
                            download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/part5.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                        },
                        {
                            title: "The Constitution of India – in Malayalam",
                            download: <a href="https://lddashboard.legislative.gov.in/sites/default/files/Constitution%20of%20India_0.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                        },
                        {
                            title: "Amendment Acts (1st to 101st)",
                            download: <a href="https://legislative.gov.in/the-constitution-amendment-acts/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                        },
                        {
                            title: "Amendment Acts (102 Onwards)",
                            download: <a href="https://legislative.gov.in/document-category/amendment-acts-102-to-onwards/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : Download/View 🔗</a>,
                        },
                        {
                            title: "The Constitution of India – in Hindi",
                            download: <a href="https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2023/05/2023050186.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : View/Download (6 MB) 🔗</a>,
                        },
                        {
                            title: "The Constitution of India – in English",
                            download: <a href="https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2023/05/2023050195.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">Accessible Version : View/Download (2 MB) 🔗</a>,
                        }
            
            
        
        
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
  }
  
  
  return (
    <>
    <div className="container flex flex-row gap-4 mx-auto mt-6 text-black dark:mt-0 dark:bg-gray-800 dark:text-white">
    <span
          onClick={Homeclick}
          className=""
        ><h4 className="text-red-500 cursor-pointer">Home</h4></span><span> &gt; </span> <h4>Constitution</h4>
     </div>   
    <div className="container pb-40 mx-auto mt-5 mb-6 dark:mb-0 dark:bg-gray-800 dark:text-white">
    
      <h1 className="mb-4 text-2xl font-bold">Constitution of India / भारत का संविधान</h1>

      {/* Global Search */}
      <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />

      {/* Table */}
      <table
        {...getTableProps()}
        className="w-full mt-4 text-black border border-collapse border-gray-200 table-auto dark:bg-gray-800 dark:text-white"
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
              <tr {...row.getRowProps()} className="hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800">
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
      <div className="flex items-center justify-between mt-4 text-black dark:bg-gray-800 dark:text-white">
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
            {pageIndex + 1} of {pageOptions.length}
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

export default ConstitutionTable;

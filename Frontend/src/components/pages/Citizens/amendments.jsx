import React, { useMemo } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import MarkdownViewer from "../../MarkdownViewer"; // Import your MarkdownViewer component
import Citizen from "../citizen";

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

const AmendmentsTable = () => {
  // Data grouped by Amendments
  const groupedData = useMemo(
    () => [
      {
        heading: "Amendments to the Indian Constitution",
        amendments: [
          { amendment: "First Amendment", title: "Added provisions for land reform and protection of laws under the Ninth Schedule", view: <a href="/docs/first-amendment" className="hover:text-red-600">View Documentation 🔗</a> },
          { amendment: "Seventh Amendment", title: "Reorganization of states and territories on linguistic lines", view: <a href="/docs/seventh-amendment" className="hover:text-red-600">View Documentation 🔗</a> },
          { amendment: "Twenty-Fourth Amendment", title: "Affirmed Parliament's authority to amend any part of the Constitution", view: <a href="/docs/twenty-fourth-amendment" className="hover:text-red-600">View Documentation 🔗</a> },
          { amendment: "Forty-Second Amendment", title: "Known as the 'Mini-Constitution'; introduced significant changes to the Constitution", view: <a href="/docs/forty-second-amendment" className="hover:text-red-600">View Documentation 🔗</a> },
          { amendment: "Fifty-Second Amendment", title: "Provisions related to anti-defection laws", view: <a href="/docs/fifty-second-amendment" className="hover:text-red-600">View Documentation 🔗</a> },
          { amendment: "Seventy-Third Amendment", title: "Introduction of Panchayati Raj institutions", view: <a href="/docs/seventy-third-amendment" className="hover:text-red-600">View Documentation 🔗</a> },
          { amendment: "Seventy-Fourth Amendment", title: "Introduction of Municipalities", view: <a href="/docs/seventy-fourth-amendment" className="hover:text-red-600">View Documentation 🔗</a> },
          { amendment: "Eighty-Sixth Amendment", title: "Right to Education as a Fundamental Right for children aged 6 to 14", view: <a href="/docs/eighty-sixth-amendment" className="hover:text-red-600">View Documentation 🔗</a> },
          { amendment: "Hundredth Amendment", title: "Land boundary agreement between India and Bangladesh", view: <a href="/docs/hundredth-amendment" className="hover:text-red-600">View Documentation 🔗</a> },
        ],
      },
    ],
    []
  );

  const navigate = useNavigate();

  const HomeClick = () => {
    navigate("/");
  };
  const CitizenClick = () => {
    navigate("/citizen");
  };

  return (
    <div className="container mx-auto mt-6">
      {/* Breadcrumb */}
      <div className="flex gap-4 mb-6">
        <span onClick={HomeClick} className="text-red-500 cursor-pointer">
          Home
        </span>
        <span>&gt;</span>
        <h4 onClick={ CitizenClick } className="text-red-500 cursor-pointer">Citizen</h4>
        <span>&gt;</span>
        <h4>Amendments</h4>
      </div>

      <h1 className="mb-4 text-2xl font-bold">Amendments to the Indian Constitution</h1>

      {/* Global Search */}
      {/* <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} /> */}

      {/* Render Groups of Amendments */}
      {groupedData.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-8">
          {/* Subheading for each group */}
          <h2 className="px-4 py-3 mb-4 text-lg font-bold text-white bg-yellow-500 rounded">
            {group.heading}
          </h2>

          {/* Table for the group */}
          <table className="w-full mb-4 border border-collapse border-gray-200 table-auto">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left border border-gray-300">Amendment</th>
                <th className="px-4 py-3 text-left border border-gray-300">Title</th>
                <th className="px-4 py-3 text-left border border-gray-300">View / Read More</th>
              </tr>
            </thead>
            <tbody>
              {group.amendments.map((amendment, amendmentIndex) => (
                <tr key={amendmentIndex} className="hover:bg-gray-100">
                  <td className="px-4 py-3 border border-gray-300">{amendment.amendment}</td>
                  <td className="w-[77%] px-4 py-3 border border-gray-300">{amendment.title}</td>
                  <td className="px-4 py-3 border border-gray-300">{amendment.view}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {/* Markdown Viewer Route */}
      <Routes>
        <Route path="docs/:fileName" element={<MarkdownViewer />} />
      </Routes>
    </div>
  );
};

export default AmendmentsTable;

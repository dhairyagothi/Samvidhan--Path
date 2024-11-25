import React, { useMemo } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import MarkdownViewer from "../../MarkdownViewer"; // Import your MarkdownViewer component
import { useTable, useGlobalFilter } from "react-table";

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

const DPSPTable = () => {
  // Data grouped by DPSP
  const groupedData = useMemo(
    () => [
      {
        heading: "PART IV Directive Principles of State Policy",
        articles: [
          { article: "36", title: "Definition", view: <a href="/docs/dpsp-36" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "37", title: "Application of the principles contained in this Part", view: <a href="/docs/dpsp-37" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "38", title: "State to secure a social order for the promotion of welfare of the people", view: <a href="/docs/dpsp-38" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "39", title: "Certain principles of policy to be followed by the State", view: <a href="/docs/dpsp-39" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "39A", title: "Equal justice and free legal aid", view: <a href="/docs/dpsp-39A" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "40", title: "Organisation of village panchayats", view: <a href="/docs/dpsp-40" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "41", title: "Right to work, to education and to public assistance in certain cases", view: <a href="/docs/dpsp-41" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "42", title: "Provision for just and humane conditions of work and maternity relief", view: <a href="/docs/dpsp-42" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "43", title: "Living wage, etc., for workers", view: <a href="/docs/dpsp-43" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "43A", title: "Participation of workers in management of Industries", view: <a href="/docs/dpsp-43A" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "43B", title: "Promotion of co-operative societies", view: <a href="/docs/dpsp-43B" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "44", title: "Uniform civil code for the citizens", view: <a href="/docs/dpsp-44" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "45", title: "Provision for early childhood care and education to children below the age of six years", view: <a href="/docs/dpsp-45" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "46", title: "Promotion of educational and economic interests of Scheduled Castes, Scheduled Tribes and other weaker sections", view: <a href="/docs/dpsp-46" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "47", title: "Duty of the State to raise the level of nutrition and the standard of living and to improve public health", view: <a href="/docs/dpsp-47" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "48", title: "Organisation of agriculture and animal husbandry", view: <a href="/docs/dpsp-48" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "48A", title: "Protection and improvement of environment and safeguarding of forests and wildlife", view: <a href="/docs/dpsp-48A" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "49", title: "Protection of monuments and places and objects of national importance", view: <a href="/docs/dpsp-49" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "50", title: "Separation of judiciary from executive", view: <a href="/docs/dpsp-50" className="hover:text-red-600">View Documentation 🔗</a> },
          { article: "51", title: "Promotion of international peace and security", view: <a href="/docs/dpsp-51" className="hover:text-red-600">View Documentation 🔗</a> },
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
        <h4>Directive Principles of State Policy (DPSP)</h4>
      </div>

      <h1 className="mb-4 text-2xl font-bold">
        Directive Principles of State Policy (DPSP)
      </h1>

      {/* Global Search
      <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} /> */}

      {/* Render Groups of DPSP */}
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
                <th className="px-4 py-3 text-left border border-gray-300">Article</th>
                <th className="px-4 py-3 text-left border border-gray-300">Title</th>
                <th className="px-4 py-3 text-left border border-gray-300">View / Read More</th>
              </tr>
            </thead>
            <tbody>
              {group.articles.map((article, articleIndex) => (
                <tr key={articleIndex} className="hover:bg-gray-100">
                  <td className="px-4 py-3 border border-gray-300">{article.article}</td>
                  <td className="w-[77%] px-4 py-3 border border-gray-300">{article.title}</td>
                  <td className="px-4 py-3 border border-gray-300">{article.view}</td>
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

export default DPSPTable;

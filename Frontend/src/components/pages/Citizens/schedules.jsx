import React, { useMemo } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import MarkdownViewer from "../../MarkdownViewer"; // Import your MarkdownViewer component

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

const SchedulesTable = () => {
  // Data grouped by Schedules
  const groupedData = useMemo(
    () => [
      {
        heading: "Schedules of the Indian Constitution",
        schedules: [
          { schedule: "First Schedule", title: "The States and The Union Territories", view: <a href="/docs/first-schedule" className="hover:text-red-600">View Documentation 🔗</a> },
          { schedule: "Second Schedule", title: "Provisions as to the President, Governors, and others", view: <a href="/docs/second-schedule" className="hover:text-red-600">View Documentation 🔗</a> },
          { schedule: "Third Schedule", title: "Forms of Oaths or Affirmations", view: <a href="/docs/third-schedule" className="hover:text-red-600">View Documentation 🔗</a> },
          { schedule: "Fourth Schedule", title: "Allocation of Seats in the Council of States", view: <a href="/docs/fourth-schedule" className="hover:text-red-600">View Documentation 🔗</a> },
          { schedule: "Fifth Schedule", title: "Administration and Control of Scheduled Areas and Tribes", view: <a href="/docs/fifth-schedule" className="hover:text-red-600">View Documentation 🔗</a> },
          { schedule: "Sixth Schedule", title: "Administration of Tribal Areas in Assam, Meghalaya, Tripura, and Mizoram", view: <a href="/docs/sixth-schedule" className="hover:text-red-600">View Documentation 🔗</a> },
          { schedule: "Seventh Schedule", title: "Union, State, and Concurrent Lists", view: <a href="/docs/seventh-schedule" className="hover:text-red-600">View Documentation 🔗</a> },
          { schedule: "Eighth Schedule", title: "Languages", view: <a href="/docs/eighth-schedule" className="hover:text-red-600">View Documentation 🔗</a> },
          { schedule: "Ninth Schedule", title: "Validation of Certain Acts and Regulations", view: <a href="/docs/ninth-schedule" className="hover:text-red-600">View Documentation 🔗</a> },
          { schedule: "Tenth Schedule", title: "Provisions Related to Disqualification on Grounds of Defection", view: <a href="/docs/tenth-schedule" className="hover:text-red-600">View Documentation 🔗</a> },
          { schedule: "Eleventh Schedule", title: "Powers and Responsibilities of Panchayats", view: <a href="/docs/eleventh-schedule" className="hover:text-red-600">View Documentation 🔗</a> },
          { schedule: "Twelfth Schedule", title: "Powers and Responsibilities of Municipalities", view: <a href="/docs/twelfth-schedule" className="hover:text-red-600">View Documentation 🔗</a> },
        ],
      },
    ],
    []
  );

  const navigate = useNavigate();

  const HomeClick = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto mt-6">
      {/* Breadcrumb */}
      <div className="flex gap-4 mb-6">
        <span onClick={HomeClick} className="text-red-500 cursor-pointer">
          Home
        </span>
        <span>&gt;</span>
        <h4>Schedules</h4>
      </div>

      <h1 className="mb-4 text-2xl font-bold">Schedules of the Indian Constitution</h1>

      {/* Global Search */}
      {/* <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} /> */}

      {/* Render Groups of Schedules */}
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
                <th className="px-4 py-3 text-left border border-gray-300">Schedule</th>
                <th className="px-4 py-3 text-left border border-gray-300">Title</th>
                <th className="px-4 py-3 text-left border border-gray-300">View / Read More</th>
              </tr>
            </thead>
            <tbody>
              {group.schedules.map((schedule, scheduleIndex) => (
                <tr key={scheduleIndex} className="hover:bg-gray-100">
                  <td className="px-4 py-3 border border-gray-300">{schedule.schedule}</td>
                  <td className="w-[77%] px-4 py-3 border border-gray-300">{schedule.title}</td>
                  <td className="px-4 py-3 border border-gray-300">{schedule.view}</td>
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

export default SchedulesTable;

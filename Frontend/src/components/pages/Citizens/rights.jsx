import React, { useMemo } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
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
const RightsTable = () => {
  // Data grouped by Fundamental Rights
  const groupedData = useMemo(
    () => [
      {
        heading: " Definition (Articles 12–13)",
        articles: [
          {
            article: "12",
            title: "Definition",
            view: (
              <a
                href="/docs/fundamental-rights-article-12"
                className="hover:text-red-600"
              >
                View Documentation 🔗
              </a>
            ),
          },
          {
            article: "13",
            title: "Laws inconsistent with or in derogation of the fundamental rights.",
            view: (
              <a
                href="/docs/fundamental-rights-article-13"
                className="hover:text-red-600"
              >
                View Documentation 🔗
              </a>
            ),
          },
        ],
      },
        {
          heading: "Right to Equality (Articles 14-18)",
        articles: [
          {
            article: "14",
            title: "Equality before law",
            view: (
              <a
                href="/docs/fundamental-rights-article-14"
                className="hover:text-red-600"
              >
                View Documentation 🔗
              </a>
            ),
          },
          {
            article: "15",
            title: "Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth",
            view: (
              <a
                href="/docs/fundamental-rights-article-15"
                className="hover:text-red-600"
              >
                View Documentation 🔗
              </a>
            ),
          },
          {
            article: "16",
            title: "Equality of opportunity in matters of public employment",
            view: (
              <a
                href="/docs/fundamental-rights-article-16"
                className="hover:text-red-600"
              >
                View Documentation 🔗
              </a>
            ),
          },
          {
            article: "17",
            title: "Abolition of Untouchability",
            view: (
              <a
                href="/docs/fundamental-rights-article-17"
                className="hover:text-red-600"
              >
                View Documentation 🔗
              </a>
            ),
          },
          {
            article: "18",
            title: "Abolition of titles",
            view: (
              <a
                href="/docs/fundamental-rights-article-18"
                className="hover:text-red-600"
              >
                View Documentation 🔗
              </a>
            ),
          },
        ],
        },
        {
          heading: "Right to Freedom (Articles 19–22)",
          articles: [
            {
              article: "19",
              title: "Freedom of Speech and Expression",
              view: (
                <a href="/docs/fundamental-rights-article-19" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
            {
              article: "20",
              title: "Protection in respect of conviction for offences",
              view: (
                <a href="/docs/fundamental-rights-article-20" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
            {
              article: "21",
              title: "Protection of Life and Personal Liberty",
              view: (
                <a href="/docs/fundamental-rights-article-21" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
            {
              article: "21A",
              title: " Right to Education",
              view: (
                <a href="/docs/fundamental-rights-article-21A" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
            {
              article: "22",
              title: "Protection against arrest and detention in certain cases",
              view: (
                <a href="/docs/fundamental-rights-article-22" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
          ],
        },
        {
          heading: "Right against Exploitation (Articles 23-24)",
          articles: [
            {
              article: "23",
              title: "Prohibition of traffic in human beings and forced labour",
              view: (
                <a href="/docs/fundamental-rights-article-23" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
            {
              article: "24",
              title: " Prohibition of employment of children in factories, etc.",
              view: (
                <a href="/docs/fundamental-rights-article-24" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
          ],
        },
        {
          heading: "Right to Freedom of Religion (Articles 25-28)",
          articles: [
            {
              article: "25",
              title: " Freedom of conscience and free profession, practice and propagation of religion",
              view: (
                <a href="/docs/fundamental-rights-article-25" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
            {
              article: "26",
              title: "Freedom to manage religious affairs",
              view: (
                <a href="/docs/fundamental-rights-article-26" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
            {
              article: "27",
              title: " Freedom as to payment of taxes for promotion of any particular religion",
              view: (
                <a href="/docs/fundamental-rights-article-27" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
            {
              article: "28",
              title: "Freedom as to attendance at religious instruction or religious worship in certain educational institutions",
              view: (
                <a href="/docs/fundamental-rights-article-28" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
          ],
        },
        {
          heading: "Cultural and Educational Rights (Articles 29-31)",
          articles: [
            {
              article: "29",
              title: " Protection of interests of minorities",
              view: (
                <a href="/docs/fundamental-rights-article-29" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
            {
              article: "30",
              title: " Right of minorities to establish and administer educational institutions",
              view: (
                <a href="/docs/fundamental-rights-article-30" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
            {
              article: "31",
              title: "Saving of certain laws",
              view: (
                <a href="/docs/fundamental-rights-article-31" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
          ],
        },
        {
          heading: "Right to Constitutional Remedies (Articles 32-35)",
          articles: [
            {
              article: "32",
              title: " Remedies for enforcement of rights conferred by this Part",
              view: (
                <a href="/docs/fundamental-rights-article-32" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
            {
              article: "33",
              title: " Power of Parliament to modify the rights conferred by this Part in their application to Forces, etc.",
              view: (
                <a href="/docs/fundamental-rights-article-33" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
            {
              article: "34",
              title: " Restriction on rights conferred by this Part while martial law is in force in any area",
              view: (
                <a href="/docs/fundamental-rights-article-34" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
            {
              article: "35",
              title: "Legislation to give effect to the provisions of this Part",
              view: (
                <a href="/docs/fundamental-rights-article-35" className="hover:text-red-600">
                  View Documentation 🔗
                </a>
              ),
            },
          ],
        },
        
    ],
    []
  );

  const navigate = useNavigate();

  // Navigation for breadcrumbs
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
        <h4>Fundamental Rights</h4>
      </div>
        
      
      <h1 className="mb-4 text-2xl font-bold">Fundamental Rights / मौलिक अधिकार</h1>

        {/* Global Search */}
          <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      {/* Render Groups of Fundamental Rights */}
      {groupedData.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-8">
          {/* Subheading for each group */}
          <h2 className="px-4 py-2 mb-4 text-lg font-bold text-white bg-yellow-500 rounded">
            {group.heading}
          </h2>

          {/* Table for the group */}
          <table className="w-full mb-4 border border-collapse border-gray-200 table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left border border-gray-300">Article</th>
                <th className="px-4 py-2 text-left border border-gray-300">Title</th>
                <th className="px-4 py-2 text-left border border-gray-300">View / Read More</th>
              </tr>
            </thead>
            <tbody>
              {group.articles.map((article, articleIndex) => (
                <tr key={articleIndex} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border border-gray-300">{article.article}</td>
                  <td className="px-4 py-2 border border-gray-300">{article.title}</td>
                  <td className="px-4 py-2 border border-gray-300">{article.view}</td>
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

export default RightsTable;

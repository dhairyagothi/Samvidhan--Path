import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { useNavigate, Routes, Route } from "react-router-dom";
import MarkdownViewer from "../../MarkdownViewer"; // Import your MarkdownViewer component

const DutiesTable = () => {
  // Data grouped by Fundamental Duties 
  const groupedData = useMemo(
    () => [
      
        {
            heading: "PART IVA Fundamental Duties (Article 51A)",
            articles: [
              {
                article: "51A(a)",
                title: "To abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem",
                view: (
                  <a href="/docs/fundamental-duties-article-51A-a" className="hover:text-red-600">
                    View Documentation 🔗
                  </a>
                ),
              },
              {
                article: "51A(b)",
                title: "To cherish and follow the noble ideals which inspired our national struggle for freedom",
                view: (
                  <a href="/docs/fundamental-duties-article-51A-b" className="hover:text-red-600">
                    View Documentation 🔗
                  </a>
                ),
              },
              {
                article: "51A(c)",
                title: "To uphold and protect the sovereignty, unity, and integrity of India",
                view: (
                  <a href="/docs/fundamental-duties-article-51A-c" className="hover:text-red-600">
                    View Documentation 🔗
                  </a>
                ),
              },
              {
                article: "51A(d)",
                title: "To defend the country and render national service when called upon to do so",
                view: (
                  <a href="/docs/fundamental-duties-article-51A-d" className="hover:text-red-600">
                    View Documentation 🔗
                  </a>
                ),
              },
              {
                article: "51A(e)",
                title: "To promote harmony and the spirit of common brotherhood amongst all the people of India transcending religious, linguistic, regional or sectional diversities",
                view: (
                  <a href="/docs/fundamental-duties-article-51A-e" className="hover:text-red-600">
                    View Documentation 🔗
                  </a>
                ),
              },
              {
                article: "51A(f)",
                title: "To value and preserve the rich heritage of our composite culture",
                view: (
                  <a href="/docs/fundamental-duties-article-51A-f" className="hover:text-red-600">
                    View Documentation 🔗
                  </a>
                ),
              },
              {
                article: "51A(g)",
                title: "To protect and improve the natural environment including forests, lakes, rivers, wildlife, and to have compassion for living creatures",
                view: (
                  <a href="/docs/fundamental-duties-article-51A-g" className="hover:text-red-600">
                    View Documentation 🔗
                  </a>
                ),
              },
              {
                article: "51A(h)",
                title: "To develop the scientific temper, humanism and the spirit of inquiry and reform",
                view: (
                  <a href="/docs/fundamental-duties-article-51A-h" className="hover:text-red-600">
                    View Documentation 🔗
                  </a>
                ),
              },
              {
                article: "51A(i)",
                title: "To safeguard public property and to abjure violence",
                view: (
                  <a href="/docs/fundamental-duties-article-51A-i" className="hover:text-red-600">
                    View Documentation 🔗
                  </a>
                ),
              },
              {
                article: "51A(j)",
                title: "To strive towards excellence in all spheres of individual and collective activity so that the nation constantly rises to higher levels of endeavor and achievement",
                view: (
                  <a href="/docs/fundamental-duties-article-51A-j" className="hover:text-red-600">
                    View Documentation 🔗
                  </a>
                ),
              },
            ],
          }
          
        
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
        <h4>Fundamental Duties </h4>
      </div>

      <h1 className="mb-4 text-2xl font-bold">Fundamental Duties  / मौलिक कर्तव्य </h1>

      {/* Render Groups of Fundamental Duties  */}
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
                  <td className="px-4 py-3 border border-gray-300 ">{article.article}</td>
                  <td className="w-[77%] px-4 py-3 border border-gray-300">{article.title}</td>
                  <td className="px-4 py-3 border border-gray-300 ">{article.view}</td>
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

export default DutiesTable;

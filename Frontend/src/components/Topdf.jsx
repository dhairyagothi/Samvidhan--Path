import React, { useState } from "react";
import jsPDF from "jspdf";
import { AiFillPrinter } from "react-icons/ai";
import html2canvas from "html2canvas";

const Topdf = () => {
  const [isLoading, setIsLoading] = useState(false); // State to show/hide the loader

  const generatePDF = async () => {
    setIsLoading(true); // Show loader
    const element = document.body; // Capture the entire page

    const pdf = new jsPDF("portrait", "pt", "a4");
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const imgWidth = 595.28; // A4 width in points
    const pageHeight = 841.89; // A4 height in points
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    // Add multiple pages if content overflows
    while (heightLeft > 0) {
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      if (heightLeft > 0) {
        pdf.addPage();
        position = -pageHeight + heightLeft;
      }
    }

    // Generate Blob URL and open in a new tab
    const pdfBlob = pdf.output("blob");
    const pdfURL = URL.createObjectURL(pdfBlob);
    window.open(pdfURL, "_blank"); // Open PDF in a new tab

    setIsLoading(false); // Hide loader
  };

  return (
    <div>
      {/* Fullscreen Loader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-xl font-bold text-white animate-bounce">
            Preparing your PDF...
          </div>
        </div>
      )}

      {/* Button to generate and open the PDF */}
      <button
        onClick={generatePDF}
        className="px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 animate-pulse"
      >
        Create PDF <AiFillPrinter className="inline-block ml-2" />
      </button>
    </div>
  );
};

export default Topdf;

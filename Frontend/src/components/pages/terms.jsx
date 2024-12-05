import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container px-12 py-8 mx-auto my-8 bg-white rounded-lg shadow-lg">
      <h1 className="mb-4 text-3xl font-bold text-yellow-500">Terms and Conditions</h1>
      <p className="mb-4 text-gray-700">
        Welcome to our platform. By accessing or using our website, you agree to abide by these Terms and Conditions. Please read them carefully.
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold text-yellow-500">Acknowledgment</h2>
      <p className="mb-4 text-gray-700">
        We sincerely thank the <a 
          href="https://legislative.gov.in" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 underline hover:text-yellow-500"
        >
          Legislative Department of India
        </a> for their valuable contributions to the legal knowledge of our nation. All PDFs, documents, and other content on this platform are reproduced from their official website with their respective copyrights. 
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold text-yellow-500">Copyright Notice</h2>
      <p className="mb-4 text-gray-700">
        All rights to the reproduced content, including but not limited to PDFs, documents, and text materials, are reserved with the Legislative Department of India. We do not claim ownership or authorship of these materials.
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold text-yellow-500">Use of Content</h2>
      <p className="mb-4 text-gray-700">
        The content on this platform is provided for informational and educational purposes only. Redistribution or commercial use of the content is strictly prohibited unless expressly permitted by the Legislative Department of India.
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold text-yellow-500">Disclaimer</h2>
      <p className="mb-4 text-gray-700">
        While we strive to ensure that the information presented is accurate and up-to-date, we cannot guarantee its accuracy or completeness. Users are encouraged to refer to the original sources on the official Legislative Department website for authoritative information.
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold text-yellow-500">External Links</h2>
      <p className="mb-4 text-gray-700">
        Our platform may contain links to external websites, including the official website of the Legislative Department of India. We are not responsible for the content, privacy policies, or practices of these external sites.
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold text-yellow-500">Limitation of Liability</h2>
      <p className="mb-4 text-gray-700">
        We shall not be held liable for any loss or damage arising from the use of this platform or the information it contains.
      </p>

      <h2 className="mt-6 mb-2 text-2xl font-semibold text-yellow-500">Changes to Terms and Conditions</h2>
      <p className="mb-4 text-gray-700">
        We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. It is your responsibility to review these terms periodically.
      </p>

      <p className="mt-6 text-gray-700">
        If you have any questions or concerns regarding these Terms and Conditions, feel free to <a 
          href="/contact" 
          className="text-blue-500 underline hover:text-yellow-500"
        >
          contact us
        </a>.
      </p>
    </div>
  );
};

export default TermsAndConditions;

import React, { useEffect } from "react";

const GoogleTranslate = () => {

  // Fallback: Load Google Translate Widget
  const loadGoogleTranslateWidget = () => {
    window.googleTranslateInit = () => {
      if (!window.google?.translate?.TranslateElement) {
        setTimeout(window.googleTranslateInit, 100);
      } else {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,pa,sa,mr,ur,bn,ta,te,kn,ml,gu,or,as,ne,si,bo,ks,tcy,sd,kon",
            layout:
              window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            defaultLanguage: "en",
            autoDisplay: false,
          },
          "google_element"
        );
      }
      cleanUpGadgetText();
    };

    const loadGoogleTranslateScript = () => {
      if (!document.getElementById("google_translate_script")) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
        script.id = "google_translate_script";
        script.onerror = () =>
          console.error("Error loading Google Translate script");
        document.body.appendChild(script);
      }
    };

    const cleanUpGadgetText = () => {
      const gadgetElement = document.querySelector(".goog-te-gadget");
      if (gadgetElement) {
        const textNodes = gadgetElement.childNodes;
        textNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = ""; // Clear text content
          }
        });
      }
    };

    loadGoogleTranslateScript();

    if (window.google && window.google.translate) {
      window.googleTranslateInit();
    }
  };

  useEffect(() => {
    loadGoogleTranslateWidget();

    return () => {
      // Cleanup logic if necessary
    };
  }, []);

  return (
    <>
      <style>
        {`
          .goog-te-combo {
            display: inline-block;
            background-color: white;
            border: 3px solid rgb(247 186 52);
            border-radius: 0.5rem;
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            outline: none;
            color: black;
            font-weight: 500;
            box-shadow: 0 4px 6px rgb(247 186 52);
            min-width: 150px;
            cursor: pointer;
          }

          .goog-te-combo:hover {
            box-shadow: 0 6px 8px rgb(247 186 52);
          }

          .goog-te-combo:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }

          .goog-logo-link {
            display: none !important;
          }

          .goog-te-gadget {
            color: transparent !important;
          }

          .goog-te-gadget > span > a {
            display: none !important;
          }

          .goog-te-gadget .goog-te-combo {
            color: black;
          }

          #google_translate_element .goog-te-gadget-simple .goog-te-menu-value span:first-child {
            display: none;
          }

          #google_translate_element .goog-te-gadget-simple .goog-te-menu-value:before {
            content: "Translate";
            color: #c01c1c;
          }

          .goog-te-banner-frame {
            display: none !important;
          }

          .goog-te-menu-frame {
            max-height: 400px !important;
            overflow-y: auto !important;
            background-color: white;
            border: 1px solid #c01c1c;
            border-radius: 0.5rem;
          }

          .skiptranslate > iframe {
            height: 0 !important;
            border-style: none;
            box-shadow: none;
          }
          
          body {
            position: relative;
            top: 0 !important;
          }
        `}
      </style>
      
      <div className="pl-20 google-translate-container md:pl-0">
        <div id="google_element"></div>
      </div>
    </>
  );
};

export default GoogleTranslate;

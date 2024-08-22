import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GTranslateWidget = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to load the GTranslate script
    const loadGTranslate = () => {
      // Remove existing GTranslate script if present
      const existingScript = document.getElementById('gtranslate-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }

      // Set up gtranslateSettings
      window.gtranslateSettings = {
        default_language: "en",
        languages: ["en", "fr", "de", "it", "es"],
        wrapper_selector: ".gtranslate_wrapper",
        float_switcher_open_direction: "bottom",
        flag_style: "3d",
      };

      // Create and append a new script element
      const script = document.createElement('script');
      script.id = 'gtranslate-script'; // Set an ID for easy reference
      script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
      script.defer = true;
      document.body.appendChild(script);
    };

    // Load or reload the GTranslate widget on route change
    loadGTranslate();

    // Cleanup function to remove the script on component unmount or route change
    return () => {
      const script = document.getElementById('gtranslate-script');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [location.pathname]); // Dependency array to trigger effect on route changes

  return <div className="gtranslate_wrapper"></div>;
};

export default GTranslateWidget;

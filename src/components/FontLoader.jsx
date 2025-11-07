import React, { useEffect } from 'react';

const FontLoader = () => {
  useEffect(() => {
    const href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap';
    const id = 'google-fonts-cinzel-poppins';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  }, []);
  return null;
};

export default FontLoader;

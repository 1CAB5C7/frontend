import React, { useState } from 'react';
import Page from "./Page.js";
import Header from "./Header.js";

export default function App() {
  // States to store app information
  const [currentPage, setCurrentPage] = useState('list');
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('us');

  // Handles the change listPage/objectPage
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handles the change to darkmode
  // TO-DO
  const handleDarkModeChange = (mode) => {
    setDarkMode(!mode);
    console.log('Darkmode: ' + mode);
  }

  // Handles the language change
  // TO-DO
  const handleLanguageChange = (language) => {
    setLanguage(language);
    console.log('Language: ' + language);
  }

  // Returns the App
  //    Header component (Logo, Darkmode, Language)
  //    Page component (Pagecontent)
  return (
    <>
      <Header onPageChange={handlePageChange} currentDarkMode={darkMode} onDarkModeChange={ handleDarkModeChange } onLanguageChange={ handleLanguageChange } />
      <Page currentPage={currentPage} handlePageChange={handlePageChange} />
    </>
  );
}

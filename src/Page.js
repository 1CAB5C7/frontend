import ListPage from "./listPage/ListPage.js";
import ObjectPage from './objectPage/ObjectPage.js';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

/**
 * Render the page based on the current page value.
 * @param {string} currentPage - The current page value.
 * @param {function} handlePageChange - The function to handle page change.
 * @returns {JSX.Element} - The rendered page.
 */
export default function Page({ currentPage, handlePageChange }) {
  const [selectedCard, setSelectedCard] = useState(null);

  /**
   * Handle page change and update selected card.
   * @param {string} target - The target page.
   * @param {string} card - The selected card.
   */
  const handlePageChange2 = (target, card) => {
    handlePageChange(target);
    setSelectedCard(card);
  };

  // Pageselection
  let target;
  if (currentPage === 'list') {
    target = <ListPage handlePageChange2={handlePageChange2} />;
  } else if (currentPage === "object") {
    target = <ObjectPage id={selectedCard} />;
  } else {
    target = <ListPage handlePageChange2={handlePageChange2} />;
  }

  // Render the Page
  return (<>{target}</>);
}

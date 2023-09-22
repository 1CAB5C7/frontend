import React, { useState, useEffect } from "react";
import Card from "./LPCard";
import './lpContent.css'
/**
 * Renders a content section with cards.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.cards - The list of cards.
 * @param {Function} props.handlePageChange2 - The function to handle page change.
 * @returns {JSX.Element} - The rendered content section.
 */
export default function Content({ cards, handlePageChange2 }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Fetches content data based on the selected cards.
    getContent(cards)
      // Updates the content state with the fetched data.
      .then((data) => {  
        setContent(data); 
      })
      // Logs any errors that occur during the fetch.
      .catch((error) => {
        console.error(error); 
      });
  }, [cards]);

  /**
   * Fetches the content data from the API.
   *
   * @param {string} selection - The selection parameter.
   * @returns {Promise<Array>} - The content data.
   * @throws {Error} - If there is an error fetching the data.
   */
  async function getContent(selection) {
    // Construct the URL using the selection parameter
    const url = `http://localhost:8080/getCards?selection=${selection}`;

    // Fetch the data from the API
    const response = await fetch(url);

    // Check if the response is successful
    if (response.ok) {
      // Parse and return the response data as JSON
      return response.json();
    } else {
      // Throw an error if there is an error fetching the data
      throw new Error("Fehler beim Abrufen der Karten-Daten.");
    }
  }

  /**
   * Handles the page change.
   *
   * @param {string} card - The selected card.
   */
  const handlePageChange3 = (card) => {
    handlePageChange2("object", card);
  };

  // Render the content section
  return (
    <>
      <div id="boxContent" className="boxContent">
        {content.map((card) => (
          <Card key={card} id={card} onHandlePage={handlePageChange3} />
        ))}
      </div>
    </>
  );
}

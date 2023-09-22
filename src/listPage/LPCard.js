import "./lpCard.css";
import React, { useState, useEffect } from "react";
import DifficultySpansRenderer from "../DifficultySpansRenderer.js";

/**
 * Render a card component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.id - The id of the card.
 * @param {Function} props.onHandlePage - The function to handle page.
 * @returns {JSX.Element|null} The rendered card component.
 */
export default function Card({ id, onHandlePage }) {
  const [cardData, setCardData] = useState(null);

/**
 * Fetches card data from the server.
 *
 * @param {string} id - The id of the card.
 * @returns {Promise<Object>} A promise that resolves to the card data.
 */
function getCardData(id) {
  // Construct the URL with the card id
  const url = `http://localhost:8080/getPreview?id=${id}`;

  // Fetch the data from the server
  return fetch(url)
    .then((response) => {
      // Check if the response is successful
      if (response.ok) {
        // Parse the response as JSON and return it
        return response.json();
      } else {
        // Throw an error if the response is not successful
        throw new Error("Error retrieving card data.");
      }
    })
    .catch((error) => {
      // Log any errors that occur during the fetch
      console.error(error);
    });
}

  useEffect(() => {
    // Fetch card data using the provided ID
    getCardData(id)
      .then((data) => {
        // Update the state with the fetched data
        setCardData(data);
      })
      .catch((error) => {
        // Log any errors that occur during the fetch
        console.error(error);
      });
  }, [id]);

  // Return null if no card data is available
  if (!cardData) {
    return null;
  }

  // Render the card
  return (
    <>
      <a onClick={() => onHandlePage(id)}>
        <div className="card custom-margin-card">
          <img src={cardData.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{cardData.name}</h5>
            <div className="difficulty">
              <span className="custom-padding">Difficulty:</span>
              {DifficultySpansRenderer.renderDifficultySpans(
                cardData.difficulty
              )}
            </div>

            <div id="totalTime">
              <span className="custom-padding">Total Time:</span>
              <span id="lblTotalTimeValue">{cardData.totaltime} Minutes</span>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

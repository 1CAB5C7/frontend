import React, { useState, useEffect } from "react";
import "./ObjectPage.css";
import OPHeader from "./OPHeader.js";
import OPEquipment from "./OPEquipment.js";
import OPIngredients from "./OPIngredients.js";
import OPInstructions from "./OPInstructions";
import OPTips from "./OPTips";

/**
 * Renders an ObjectPage component.
 *
 * @param {object} id - The unique identifier of the object.
 * @return {JSX.Element} The rendered ObjectPage component.
 */
export default function ObjectPage({ id }) {
  const [cardData, setCardData] = useState(null);

  // Fetch card data when the id changes
  useEffect(() => {
    getCardData(id)
      .then((data) => {
        setCardData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  /**
   * Retrieves card data from the server.
   *
   * @param {string} id - The ID of the data to retrieve.
   * @return {Promise} A Promise that resolves to the retrieved card data.
   */
  async function getCardData(id) {
    const url = `http://localhost:8080/getData?id=${id}`;
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error while fetching card data.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Return null if card data is not loaded
  if (!cardData) {
    return null; 
  }

  // Render the object
  return (
    <>
      <div className="objectPage justify-content-center">
        <div className="card-body">
          <OPHeader
            img={cardData.img}
            name={cardData.name}
            difficulty={cardData.difficulty}
            totalTime={cardData.totaltime}
            origin={cardData.origin}
          />
          <OPEquipment items={cardData.equipment} />
          <OPIngredients items={cardData.ingredients} />
          <OPInstructions items={cardData.instructions} />
          <OPTips items={cardData.tips} />
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

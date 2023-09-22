import React, { useState } from 'react';
import NavSelection from "./LPNavSelection.js";   
import Content from "./LPContent.js";

/**
 * Page component represents the main page of the application.
 * @param {function} handlePageChange2 - The function to handle page change.
 */
export default function ListPage({ handlePageChange2 }) {
    // State to store the selected cards
    const [cards, setSelectedCards] = useState('breakfast');

    /**
     * Handles the change in the selected cards.
     * @param {string} model - The selected cards model.
     */
    const handleModelChange = (model) => setSelectedCards(model);

    // Render the list page
    return (
        <>
            {/* Navigation selection component */}
            <NavSelection onModelChange={handleModelChange}/>

            {/* Content component */}
            <Content cards={cards} handlePageChange2={handlePageChange2}  />
        </>
    );
}

import React from 'react';

/**
 * Renders an instructions table based on the given items.
 *
 * @param {Object} items - An array of items to be rendered as instructions in the table.
 * @return {React.Element} - The generated instructions table wrapped in a div element.
 */
export default function OPInstructions ({ items }) {
  /**
   * Generates the instructions table.
   *
   * @param {Object} items - An array of items to be rendered as instructions in the table.
   * @return {React.Element} - The generated instructions table.
   */
  function generateInstructionsTable(items){
    return (
      <div id="instructions" className="custom-margin-sections">
        <h4>Instructions:</h4>
        <ol className="list-group list-group-numbered custom-margin-list">
          {items.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  // Generate the instructions table
  const instructions = generateInstructionsTable(items);

  // Render the instructions component  
  return <div>{instructions}</div>;
}


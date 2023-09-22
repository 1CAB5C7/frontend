import React from 'react';

/**
 * Renders a list of tips.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.items - The list of tips to render.
 * @returns {JSX.Element} The rendered list of tips.
 */
export default function OPTips ({ items }) {
  /**
   * Generates the tips table.
   *
   * @param {Array} items - The list of tips to generate the table from.
   * @returns {JSX.Element} The generated tips table.
   */
  function generateTipsTable(items){
    return (
      <div id="tips" className="custom-margin-sections">
        <h4>Tips:</h4>
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

  // Generate the tips table
  const tips = generateTipsTable(items);

  // Render the tips component
  return <div>{tips}</div>;
}


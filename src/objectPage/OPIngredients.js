/**
 * Renders the ingredients table based on the given items.
 *
 * @param {Array} items - The array of items containing the amount, unit, and name of each ingredient.
 * @returns {JSX.Element} - The JSX element representing the ingredients table.
 */
export default function OPIngredients({ items }) {
  // Generate the ingredients table
  const generateIngredientsTable = () => {
    return (
      <div id="equipment" className="custom-margin-sections">
        <h4>Ingredients</h4>
        <table className="table custom-margin-table">
          <thead>
            <tr>
              <th scope="col">Amount</th>
              <th scope="col">Unit</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.amount}</td>
                <td>{item.unit}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Generate the ingredients table
  const ingredientsTable = generateIngredientsTable();

  // Render the ingredients table
  return <>{ingredientsTable}</>;
}

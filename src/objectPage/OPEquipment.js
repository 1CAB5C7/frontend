/**
 * Renders the Equipment component.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.items - An array of items to be displayed in the table.
 * @returns {JSX.Element} - The rendered Equipment component.
 */
export default function Equipment({ items }) {
  /**
   * Generates an equipment table based on the provided items.
   *
   * @param {Array} items - An array of items to be displayed in the table.
   * @returns {JSX.Element} - The generated equipment table as a React component.
   */
  function generateEquipmentTable(items) {
    return (
      <div id="equipment" className="custom-margin-sections">
        <h4>Equipment</h4>
        <table className="table custom-margin-table">
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Generate the equipment table
  const table = generateEquipmentTable(items);

  // Render the Equipment component
  return <div>{table}</div>;
}

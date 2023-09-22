import "./lpNavSelection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

/**
 * Component for rendering the navigation selection.
 * @param {Function} onModelChange - Callback function for handling model change.
 * @returns {JSX.Element} - The rendered component.
 */
export default function NavSelection({ onModelChange }) {
  /**
   * Handle button click event.
   * @param {string} model - The selected model.
   */
  const handleButtonClick = (model) => {
    onModelChange(model);
  };

  // Render the nav selection component
  return (
    <>
      {/* Navigation */}
      <nav>
        {/* Tab list */}
        <div
          className="nav nav-tabs justify-content-center"
          id="nav-tab"
          role="tablist"
        >
          {/* Breakfast tab */}
          <button
            className="nav-link active"
            id="nav-breakfast-tab"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            onClick={() => handleButtonClick("breakfast")}
          >
            Breakfast
          </button>

          {/* Dinner tab */}
          <button
            className="nav-link"
            id="nav-dinner-tab"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            onClick={() => handleButtonClick("dinner")}
          >
            Dinner
          </button>

          {/* Snack tab */}
          <button
            className="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            onClick={() => handleButtonClick("snack")}
          >
            Snack
          </button>

          {/* Dessert tab */}
          <button
            className="nav-link"
            id="nav-disabled-tab"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            onClick={() => handleButtonClick("dessert")}
          >
            Dessert
          </button>
        </div>
      </nav>
    </>
  );
}

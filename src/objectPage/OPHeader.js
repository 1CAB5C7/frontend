import DifficultySpansRenderer from "../DifficultySpansRenderer.js";

/**
 * Renders the header of the OP component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.img - The image source.
 * @param {string} props.title - The title of the OP.
 * @param {string} props.difficulty - The difficulty of the OP.
 * @param {number} props.totalTime - The total time of the OP.
 * @param {string} props.origin - The origin of the OP.
 * @return {JSX.Element} The rendered header component.
 */
export default function OPHeader({
  img,
  name,
  difficulty,
  totalTime,
  origin,
}) {
  /**
   * Generates the class name for the flag icon based on the origin.
   *
   * @param {string} origin - The origin of the flag.
   * @returns {string} The class name for the flag icon.
   */
  function getFlagIconClass(origin) {
    // Convert the origin to lowercase and prepend it with 'flag-icon-'
    return `flag-icon flag-icon-${origin.toLowerCase()}`;
  }

  // Render the header component
  return (
    <>
      <img src={img} className="img-thumbnail" alt="..." />
      <h2 className="card-title custom-margin-sections custom-margin-title">
        {name}
      </h2>

      <div className="container text-center custom-margin-sections">
        <div className="row">
          <div className="col">
            <div className="difficulty">
              <span className="custom-padding">Difficulty:</span>
              {DifficultySpansRenderer.renderDifficultySpans(difficulty)}
            </div>
          </div>

          <div className="col">
            <div>
              <span className="custom-padding">Total Time:</span>
              <span id="lblTotalTimeValue">{totalTime} Minutes</span>
            </div>
          </div>

          <div className="col">
            <div className="languageRecipe">
              <span className="custom-padding">Origin:</span>
              <span
                id="lblLanguageRecipeSymbol"
                className={getFlagIconClass(origin)}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

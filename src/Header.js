import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Header.css';


/**
 * Renders the header component.
 * @param {Object} props - The component props.
 * @param {Function} props.onPageChange - The function to handle page change.
 * @param {boolean} props.currentDarkMode - The current dark mode state.
 * @param {Function} props.onDarkModeChange - The function to handle dark mode change.
 * @param {Function} props.onLanguageChange - The function to handle language change.
 * @returns {JSX.Element} The header component.
 */
export default function Header({ onPageChange, currentDarkMode, onDarkModeChange, onLanguageChange }) {
  // Render the header component
  return (
    <>
      {/* Navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Brand button */}
          <button className="navbar-brand" id="btnBrand" onClick={() => onPageChange('list')}>
            tooLazyForCookingVeggie
          </button>
          {/* Navbar toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar collapse */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              {/* Dark mode button */}
              <li className="nav-item">
                <a className="nav-link" onClick={() => onDarkModeChange(currentDarkMode)}>
                  <span className="fas fa-sun"></span>
                </a>
              </li>
              {/* Language selection dropdown */}
              <li className="nav-item dropdown nav-item-dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="flag-icon flag-icon-us"></span>
                </a>
                {/* Language selection dropdown menu */}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {/* English language option */}
                  <li>
                    <a className="dropdown-item" onClick={() => onLanguageChange('us')}>
                      <span className="flag-icon flag-icon-us"></span>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  {/* French language option */}
                  <li>
                    <a className="dropdown-item" onClick={() => onLanguageChange('fr')}>
                      <span className="flag-icon flag-icon-fr"></span>
                    </a>
                  </li>
                  {/* German language option */}
                  <li>
                    <a className="dropdown-item" onClick={() => onLanguageChange('de')}>
                      <span className="flag-icon flag-icon-de"></span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

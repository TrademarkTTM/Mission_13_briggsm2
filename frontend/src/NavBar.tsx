import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-collapse" id="navbarNav">
          <a className="navbar-brand">Joel's Movie List</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://baconsale.com/"
                target="_blank"
                rel="noreferrer"
              >
                Podcast
              </a>
            </li>
            <li className="nav-item">
              <Link to="/MovieList" className="nav-link">
                Movie List
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

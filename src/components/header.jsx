import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="header"
      className="header dark-background d-flex flex-column justify-content-center"
    >
      <i className="header-toggle d-xl-none bi bi-list"></i>
      <div className="header-container d-flex flex-column align-items-start">
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link
                to="/"
                onClick={(e) => handleNavClick(e, "home")}
                className="active"
              >
                <i className="bi bi-house navicon"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/#about" onClick={(e) => handleNavClick(e, "about")}>
                <i className="bi bi-person navicon"></i> About
              </Link>
            </li>
            <li>
              <Link to="/#resume" onClick={(e) => handleNavClick(e, "resume")}>
                <i className="bi bi-file-earmark-text navicon"></i> Resume
              </Link>
            </li>
            <li>
              <Link
                to="/#portfolio"
                onClick={(e) => handleNavClick(e, "portfolio")}
              >
                <i className="bi bi-images navicon"></i> Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                <i className="bi bi-envelope navicon"></i> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

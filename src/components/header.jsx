import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(location.pathname.replace("/", ""));
    } else {
      setActiveSection("home");
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setActiveSection(sectionId);
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }
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
                className={activeSection === "home" ? "active" : ""}
              >
                <i className="bi bi-house navicon"></i> Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={(e) => handleNavClick(e, "about")}
                className={activeSection === "about" ? "active" : ""}
              >
                <i className="bi bi-person navicon"></i> About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={(e) => handleNavClick(e, "resume")}
                className={activeSection === "resume" ? "active" : ""}
              >
                <i className="bi bi-file-earmark-text navicon"></i> Resume
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={(e) => handleNavClick(e, "portfolio")}
                className={activeSection === "portfolio" ? "active" : ""}
              >
                {
                  location.pathname !== "/" ?
                    <div className="arrowIcon"><i class="bi bi-caret-down-fill"></i></div>
                    :
                    <div className="arrowIcon"><i className="bi bi-images navicon"></i></div>

                }
                Portfolio
              </Link>

              {location.pathname !== "/" &&
                <ul>
                  <li>
                    <Link
                      to="/ibProject"
                      className={`subMenu ${activeSection === "ibProject" ? "active" : ""}`}
                    >
                      IB Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pwaProject"
                      className={`subMenu ${activeSection === "pwaProject" ? "active" : ""}`}
                    >
                      PWA Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/scmProject"
                      className={`subMenu ${activeSection === "scmProject" ? "active" : ""}`}
                    >
                      SCM Project
                    </Link>
                  </li>
                </ul>
              }
            </li>
            <li>
              <Link
                to="/"
                onClick={(e) => handleNavClick(e, "contact")}
                className={activeSection === "contact" ? "active" : ""}
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
